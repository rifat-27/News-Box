import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Question.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Question = (ques) => {
  const { id, question, options, correctAnswer } = ques.ques
  const handleClick = (op) => {
    op === correctAnswer ? toast('Right Answer!') : toast('Wrong Answer!')
  }
  const handleEyeClick = () => {
    toast(correctAnswer)
  }
  return (
    <div className='quiz-question-container'>
      <ToastContainer />
      <div className='quiz-question'>
        <h4>
          {question}
          <span className='eye-icon' onClick={() => handleEyeClick()}>
            <FontAwesomeIcon icon={faEye} />
          </span>
        </h4>
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
