import React from 'react'
import { useState
 } from 'react';
export default function Contact() {
  const [message, setMessage] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)

  }
  return (
    <div id='contact' className='snap-start md:flex '>
      <div className='md:w-1/2'>
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className='md:w-1/2 flex flex-col items-center justify-center'>
        <h2 className='text-2xl'>Contact.</h2>
        <form onSubmit={handleSubmit} className='mb-10 w-3/4 h-10/12 flex flex-col items-center gap-4'>
          <input className='w-11/12 md:w-2/3 h-10 border text-sm' type="text" placeholder='Email' />
          <textarea className='w-11/12 md:w-2/3 h-[250px] border text-sm' placeholder='Message'></textarea>
          <button className='w-1/3 h-8 bg-red-700 rounded-lg text-white font-bold text-base cursor-pointer' type='submit'>Send</button>
          {message && <span className='text-green-700 text-lg'>Thanks, I'll reply ASAP :) </span>}
        </form>
      </div>
    </div>
  )
}
