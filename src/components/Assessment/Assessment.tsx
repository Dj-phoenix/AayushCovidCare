
import React, { useState, useEffect } from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from   './componentsAsment/Quiz';

import Result from './componentsAsment/Result';


const Assessment = () => {

  const [counter, setcounter] = useState(0);

  const [question, setquestion] = useState('');
  const [questionId, setquestionId] = useState(1)

  const [answerOptions, setanswerOptions] = useState([]);

  const [answer, setanswer] = useState('');
  const [answersCount, setanswersCount] = useState({})

  const [result, setresult] = useState('')


  useEffect(() => {
    const shuffledAnswerOptions = quizQuestions.map(question =>
      shuffleArray(question.answers)
    );
    setquestion(quizQuestions[0].question)
    setanswerOptions(shuffledAnswerOptions[0])
  }, [])

  const shuffleArray = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const handleAnswerSelected = (event) => {
    setUserAnswer(event.currentTarget.value);
    if (questionId < quizQuestions.length) {
      setTimeout(() => setNextQuestion(), 300);
    } else {
      setTimeout(() => setResults(getResults()), 300);
    }
  }

  const setUserAnswer = (answer) => {
    setanswersCount({
      answersCount,
      [answer]: (answersCount[answer] || 0) + 1
    })
    setanswer(answer)

  }

  const setNextQuestion = () => {
    const counterN = counter + 1;
    const questionIdN = questionId + 1;

    setcounter(counterN)
    setquestionId(questionIdN)
    setquestion(quizQuestions[counter].question)
    setanswerOptions(quizQuestions[counter].answers)
    setanswer('')

  }

  const getResults = () => {
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  const setResults = (result) => {
    if (result.length === 1) {
      setresult(result[0])
    } else {
      setresult('Undetermined')
    }
  }

  const renderQuiz = () => {
    return (
      <Quiz
        answer={answer}
        answerOptions={answerOptions}
        questionId={questionId}
        question={question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={handleAnswerSelected}
      />
    );
  }

  const renderResult = () => {
    return <Result quizResult={result} />;
  }

  return (
    <>
      {result ? renderResult() : renderQuiz()}
    </>
  );

}

export default Assessment;
