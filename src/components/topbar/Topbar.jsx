import React from 'react';


export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={' w-full fixed top-0  z-40  ' + (menuOpen && "bg-indigo-700")}>
      <div className={'h-[70px] flex items-center justify-between z-40 bg-white' + (menuOpen && "!bg-indigo-700")} >
        <div className='flex items-center'>
          <div className={'flex items-center text-indigo-700  ' +  (menuOpen && "!text-white")}>
            <a href='#intro' >
              <img className='h-10 m-3' src="./assets/logo.jpg" alt="" />
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hidden md:flex">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
            </svg>
            <p className='hidden md:flex ml-3.5 mr-5 font-semibold '>+99894-930-74-81</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hidden md:flex">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <p className='ml-3.5 font-semibold hidden md:flex'>KasimovAslbek1994@mail.ru</p>

        </div>






        </div>
        <div className='w-8 h-6 flex flex-col gap-1 mr-8 cursor-pointer  ' onClick={()=>setMenuOpen(!menuOpen)}>
          <span className={'w-full h-1 bg-indigo-800 ' + (menuOpen && "!bg-white origin-top-left rotate-45 transition duration-700")}></span>
          <span className={'w-full h-1 bg-indigo-800 ' + (menuOpen && "!opacity-0")}></span>
          <span className={'w-full h-1 bg-indigo-800 ' + (menuOpen && "!bg-white origin-bottom-left  -rotate-45 transition duration-700")}></span>
        </div>
      </div>
    </div>

  )
}

