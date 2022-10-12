import React from 'react'
import './Question.css'

const Question = (ques) => {
  const { id, question, options, correctAnswer } = ques.ques
  const handleClick = (op) => {
    console.log(op, correctAnswer)
  }
  return (
    <div className='quiz-question-container'>
      <div className='quiz-question'>
        <h4>{question}</h4>
      </div>
      <div className='option-container'>
        {options.map((op) => (
          <div className='option'>
            <input type='radio' value={op} onClick={() => handleClick(op)} />
            <label>
              <h5>{op}</h5>
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Question
