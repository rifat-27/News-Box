import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../Card/Card'
import './Home.css'

const Home = () => {
  const quiz = useLoaderData().data
  return (
    <div className='card-container'>
      {quiz.map((qd) => (
        <Card props={qd} key={qd.id}></Card>
      ))}
    </div>
  )
}

export default Home
