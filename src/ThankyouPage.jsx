import React from 'react'
import illustration from './images/illustration-thank-you.svg'
import './App.css'

const ThankyouPage = ({rating}) => {
  return (
    <div className='hero h-[300px] w-[350px] mx-auto p-6 rounded-2xl flex flex-col items-center justify-center gap-6 text-center'>
        <img src={illustration} className='h-[100px] w-[100px]' alt="" />
        <p 
            className='text-orange-400 p-2 lblue rounded-2xl'
        >You selected {rating} out of 5</p>
        <h2 className='text-xl text-neutral-50'>Thank You!</h2>
        <p className='text-gray-400'>We appreciate you taking the time to give a rating.If you ever need more support, don't hesitate to get in touch</p>
    </div>
  )
}

export default ThankyouPage