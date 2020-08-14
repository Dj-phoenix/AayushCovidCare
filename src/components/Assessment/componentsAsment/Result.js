import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

const Result = (props) => {

  var msg = "";
  if(props.quizResult === "Mild Covid Symptoms" || props.quizResult === "High Covid Symptoms"){
      msg = "Kindly consult doctor!";
  }
  else{
      msg = "Stay Home and Stay Safe!"
  }
    
  return (
   
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        You have <strong>{props.quizResult}</strong>! {msg}
      </div>
      <div>
          <button style={{"float": "right", "backgroundColor" : "black", "color":"white",
        "fontSize":"17px","padding":"10px 60px", "borderRadius":"5px","margin":"32px 0px"}} onClick={() => window.location.reload(false)}>Back</button>
      </div>
    </CSSTransitionGroup>
  );
}
export default Result;
