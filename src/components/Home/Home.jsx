import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../Card/Card'

const Home = () => {
  const quiz = useLoaderData().data
  // console.log(quiz)
  // quiz.map((qd) => console.log(qd))
  return (
    <div>
      {quiz.map((qd) => (
        <Card props={qd} key={qd.id}></Card>
      ))}
    </div>
  )
}

export default Home
