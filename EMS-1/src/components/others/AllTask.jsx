import React from 'react'

const AllTask = () => {
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
        <div className=''>
             <div  className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium  w-1/5'></h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400'></h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'></h5>
            <h5 className='text-lg font-medium w-1/5 text-white'></h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'></h5>
        </div>
        </div>
        
        
    </div>
  )
}

export default AllTask
