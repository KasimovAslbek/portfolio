import React from 'react'

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={'bg-indigo-700 w-[200px] md:w-[300px] h-[100vh] fixed top-0 right-[-300px] z-30 flex flex-col items-center justify-center transition-all duration-700 ' + (menuOpen && "!right-0")}>
        <ul className='text-2xl md:text-4xl text-white font-light space-y-6 w-2/3'>
            <li onClick={()=>setMenuOpen(false)} className='hover:font-medium'><a href="#intro">Home</a></li>
            <li onClick={()=>setMenuOpen(false)} className='hover:font-medium'><a href="#portfolio">Portfolio</a></li>
            <li onClick={()=>setMenuOpen(false)} className='hover:font-medium'><a href="#works">Works</a></li>
            <li onClick={()=>setMenuOpen(false)} className='hover:font-medium'><a href="#testimonials">Testimonials</a></li>
            <li onClick={()=>setMenuOpen(false)} className='hover:font-medium'><a href="#contact">Contact</a></li>
        </ul>
    </div>
  )
}
