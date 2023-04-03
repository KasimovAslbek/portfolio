import React from 'react'
import { useState } from 'react';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
    {
      id: "4",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "5",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },    
  ];

  const handleClick = (way)=> {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : 
    setCurrentSlide(currentSlide< data.length -1 ? currentSlide + 1 : 0)
  };
  return (
    <div id='works' className='h-[500px] md:h-[650px] bg-red-600 flex items-center justify-center  snap-start relative'>
      <div className='h-[550px] flex absolute left-[-100vw] ease-out duration-1000' style={{transform: `translateX(-${currentSlide *100}vw)`}}>
        {data.map((d) => ( <div className='w-screen flex items-center justify-center'>
          <div className='max-w-7xl mx-auto w-9/12 md:h-5/6  flex items-center justify-center bg-white rounded my-28'>
              <div className='w-1/3 md:h-[80%] flex items-center justify-center '>
                <div className='w-[90%] h-[70%] flex flex-col justify-between'>
                  <div className='w-10 h-10 rounded-full bg-orange-300 flex items-center justify-center'>
                    <img className='p-1.5' src={d.icon} alt="" />
                  </div>
                  <h2 className='text-sm font-bold'>{d.title}</h2>
                  <p className='text-xs'>{d.desc}</p>
                  <span className='text-xs underline cursor-pointer font-bold'>Projects</span>
                </div>
              </div>
              <div className='w-2/3 h-full flex items-center justify-center overflow-hidden'>
                <img className='md:h-full md:w-[400px] -rotate-12 ' src={d.img} alt="" />
              </div>
          </div>
        </div>))}
      </div>
      <img className='absolute left-2 md:left-14 h-8 md:h-16 rotate-180 cursor-pointer' src="assets/arrow.png" alt="" onClick={()=>handleClick("left")} />
      <img className='absolute right-2 md:right-14 h-8 md:h-16 cursor-pointer' src="assets/arrow.png" alt="" onClick={()=>handleClick()}/>

    </div>
  )
}
