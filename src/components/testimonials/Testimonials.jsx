import React from 'react'

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];

  return (
    <div id='testimonials' className=' snap-start flex flex-col items-center justify-center '>
      <h1 className='text-3xl md:text-5xl mt-10 md:mt-20'>Testimonials</h1>
      <div className='w-full h-full flex flex-col md:flex-row items-center justify-center my-20'>
        {data.map(d=> (
        <div className={d.featured ? 'w-[300px] h-[400px] my-5 md:mx-5 rounded-xl shadow-[0_0_15px_-8px_black] flex flex-col justify-around p-5 transition duration-700 ease-out hover:scale-110' : 'w-[250px] h-[350px] rounded-xl shadow-[0_0_15px_-8px_black] flex flex-col justify-around p-5 transition duration-700 ease-out hover:scale-110'}>
          <div className='flex items-center justify-center my-2.5'>
            <img className='h-6' src="assets/right-arrow.png" alt="" />
            <img className='h-16 w-16 rounded-full object-cover mx-8'  src={d.img} alt="" />
            <img className='h-6' src={d.icon} alt="" />
          </div>
          <div className='p-2.5  bg-red-100 rounded-xl text-sm my-2.5'>{d.desc}</div>
          <div className='text-base flex flex-col items-center justify-center'>
            <h3 className='m-1'>{d.name}</h3>
            <h3 className='text-gray-700'>{d.title}</h3>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
