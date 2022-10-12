import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = (props) => {
  const { id, name, logo } = props.props
  return (
    <div className='card'>
      <img src={logo} alt='Topic Logo' className='card-img' />
      <div className='card-content'>
        <h3>{name}</h3>
        <button className='card-btn'>
          <Link to={`/quiz/${id}`}>Start Quiz</Link>
        </button>
      </div>
    </div>
  )
}

export default Card
