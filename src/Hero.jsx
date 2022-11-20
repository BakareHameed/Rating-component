import React from 'react'
import star from './images/icon-star.svg'
import './App.css'

const Hero = () => {
  return (
    <div className='hero mx-auto p-6 rounded-2xl flex flex-col justify-center gap-6'>
        <div className='star flex items-center justify-center rounded-full '>
            <img src={star} alt="star" />
        </div>
        <h2 className='text-white text-2xl'>How did we do?</h2>
        <p className='text-gray-400'>Please let us know how we did with your support request.All feedback is appreciated to help us improve our offering!</p>
        <div className='flex justify-between'>
            <div className='star flex items-center justify-center rounded-full '>
                <p className='text-gray-400'>1</p>
            </div>
            <div className='star flex items-center justify-center rounded-full '>
                <p className='text-gray-400'>2</p>
            </div>
            <div className='star flex items-center justify-center rounded-full '>
                <p className='text-gray-400'>3</p>
            </div>
            <div className='star flex items-center justify-center rounded-full '>
                <p className='text-gray-400'>4</p>
            </div>
            <div className='star flex items-center justify-center rounded-full '>
                <p className='text-gray-400'>5</p>
            </div>
            <div className='star flex items-center justify-center rounded-full '>
                <p className='text-gray-400'>6</p>
            </div>

        </div>
        <button type='button' className='px-10 py-2 rounded-2xl text-white bg-orange-400'>SUBMIT</button>
        
    </div>
  )
}

export default Hero