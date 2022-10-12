import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import './Statistics.css'

const Statistics = () => {
  const data = useLoaderData().data
  return (
    <div className='stat-container'>
      <BarChart width={1000} height={600} data={data}>
        <XAxis dataKey='name' stroke='#8884d8' />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
        <Legend
          width={100}
          wrapperStyle={{
            top: 40,
            right: 20,
            backgroundColor: '#f5f5f5',
            border: '1px solid #d5d5d5',
            borderRadius: 3,
            lineHeight: '40px',
          }}
        />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <Bar dataKey='total' fill='#8884d8' barSize={30} />
      </BarChart>
    </div>
  )
}

export default Statistics
