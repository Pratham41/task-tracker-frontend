import React from 'react'
import Task from '../components/Task'

const Home = () => {
  return (
    <div style={{minHeight:420}}>
        <div className='d-flex flex-row justify-content-start align-items-center mt-4 px-4'>
        <Task />
        </div>
    </div>
  )
}

export default Home
