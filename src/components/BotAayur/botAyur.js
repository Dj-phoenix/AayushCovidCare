import React, { useState ,useEffect} from 'react';


import {  View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';

import { dialogflowConfig } from './secure.js';

const BOT_USER = {
  _id: 2,
  name: 'FAQ Bot',
  avatar: 'https://i.imgur.com/7k12EPD.png'
};

const BotAyur = () => {
 
  let [messages, setMessage] = useState([
    {
      _id: 1,
      text: `Hi! I am the Aayur, How may I help you with today?`,
      createdAt: new Date(),
      user: BOT_USER
    }
  ]);


  useEffect(() => {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id
    );
 
  }, [])

  const handleGoogleResponse = (result) => {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    sendBotResponse(text);
  }

  const onSend = (messages = []) => {


 //setMessage(GiftedChat.append(messages, messages))
 setMessage(prevState => GiftedChat.append(prevState.messages, messages));
 
    
    let message = messages[0].text;
    Dialogflow_V2.requestQuery(
      message,
      result => handleGoogleResponse(result),
      error => console.log(error)
    );
  }

  const sendBotResponse = (text) => {
    let msg = {
      _id: messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER
    };

    setMessage(prevState => GiftedChat.append(prevState.messages, messages));
 
    

  }

    return (
      <View style={{ flex: .5, backgroundColor: '#fff' }}>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1
          }}
        />
      </View>
    );
  
}

export default BotAyur;
