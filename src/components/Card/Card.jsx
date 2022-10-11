import React from 'react'

const Card = (props) => {
  const { name, logo } = props.props
  return (
    <div className='card'>
      <img src={logo} alt='Topic Logo' className='card-img' />
      <div className='card-content'>
        <h3>{name}</h3>
        <button>Start Quiz</button>
      </div>
    </div>
  )
}

export default Card
