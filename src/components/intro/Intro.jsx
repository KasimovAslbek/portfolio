import React from 'react'
import  { useEffect, useRef } from 'react'
import Typed from 'typed.js';


export default function Intro() {

  const textRef = useRef(null);
  const typedRef = useRef(null);
  
  useEffect(() => {
    const options = {
      showCursor: false,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      strings: ["Developer", "Designer", "Content Creator"],
      loop: true
    };
    if (typedRef.current) {
      typedRef.current.destroy();
    }
    typedRef.current = new Typed(textRef.current, options);
  }, []);
  
  return (
    <div id='intro' className=' md:flex snap-start'>
        <div className=' md:w-1/2 '>
          <div className='md:w-[700px] md:h-[700px] bg-red-600 rounded-full flex justify-center items-end float-right'>
            <img className='h-[90%]' src="assets/man.png" alt="" />
          </div>
        </div>
        <div className=' md:w-1/2 relative'>
          <div className=' pl-12 flex flex-col mt-[40%]'>
            <h2 className='mt-10 md:mt-0  text-xl md:text-3xl'>Hi There, I'm</h2>
            <h1 className='text-4xl md:text-6xl my-2.5'>Aslbek Qosimov</h1>
            <h3 className='text-xl md:text-2xl'>Freelance <span ref={textRef} className='text-red-800'></span></h3>
          </div>
          <a className='hidden md:flex absolute bottom-0 md:bottom-2.5 left-1/2 md:mb-32' href="#portfolio">
            <img className='w-8 animate-bounce ' src="assets/down.png" alt=""/>
          </a>
        </div>
    </div>
  )
}
