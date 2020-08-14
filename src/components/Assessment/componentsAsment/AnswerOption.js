import React from 'react';

import {
  Divider,
  TopNavigation,
  Text,
  TopNavigationAction
} from '@ui-kitten/components';
const AnswerOption = (props) => {
  return (
    <>
    
     <Text>
        {props.answerContent}
      </Text>
   
    </>
  );
}

export default AnswerOption;
