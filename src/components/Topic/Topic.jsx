import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Topic = () => {
  const data = useLoaderData().data
  return (
    <div>
      {data.map((t) => (
        <div>
          <h1>{t.name}</h1>
          <p>Total:{t.total} questions</p>
        </div>
      ))}
    </div>
  )
}

export default Topic
