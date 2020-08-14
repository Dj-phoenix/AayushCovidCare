import React from 'react';
//import { TransitionGroup } from 'react-transition-group';
import Question from '../componentsAsment/Question';
import QuestionCount from '../componentsAsment/QuestionCount';
import AnswerOption from '../componentsAsment/AnswerOption';

import {
  View
} from 'react-native';

const Quiz = (props) => {


  const renderAnswerOptions = (key) => {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return <> 
  
      <View>
  <QuestionCount counter={props.questionId} total={props.questionTotal} />
  <Question content={props.question} />
  {props.answerOptions.map(renderAnswerOptions)}
  </View>

  </>
  
}


export default Quiz;
