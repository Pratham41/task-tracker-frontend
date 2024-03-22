import React from 'react'

const Task = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center rounded shadow border p-4'>
        <h4>Title</h4>
        <hr className='w-100' /> 
        <p>Description.....</p>
        <p>Status</p>
        <p>End Date</p>
    </div>
  )
}

export default Task
