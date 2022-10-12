import './Quiz.css'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Question from '../Question/Question'

const Quiz = () => {
  const quiz = useLoaderData().data
  console.log(quiz)
  return (
    <div className='quiz-container'>
      <h2>Quiz Topic: {quiz.name}</h2>
      <h3>Total Questions: {quiz.questions.length}</h3>
      <div className='question-container'>
        {quiz.questions.map((q) => (
          <Question ques={q} key={q.id}></Question>
        ))}
      </div>
    </div>
  )
}

export default Quiz
