import React from 'react'
import PortfolioList from '../portfoliolist/PortfolioList'
import { useState } from 'react';
import { useEffect } from 'react';

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    { 
      id: 'featured',
      title: "Featured"

    },
    { 
      id: 'web',
      title: "Web App"

    },
    { 
      id: 'mobile',
      title: "Mobile App"

    },
    { 
      id: 'design',
      title: "Design"

    },
    { 
      id: 'content',
      title: "Content"

    }
    
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  
  return (
    <div id='portfolio' className='mt-20 snap-start shrink-0 flex flex-col items-center'>
      <h1 className='text-3xl md:text-5xl mb-6 md:mb-0'>Portfolio</h1>
      <ul className='md:m-2.5 grid grid-cols-2 md:flex  md:mr-12 gap-x-2'>
        {list.map(item=>(
          <PortfolioList 
            title = {item.title} 
            active={selected === item.id} 
            setSelected={setSelected} 
            id = {item.id} />
        ))}
      </ul>
      <div className='flex w-[90%] md:w-[80%] items-center justify-center flex-wrap gap-1'>
        {data.map((d)=> (
        <div className='hover:bg-slate-800 cursor-pointer w-64 h-44 rounded-md border-solid my-2.5 mx-5 flex items-center justify-center relative transition duration-700 ease '>
          <img className='rounded-md w-full h-full object-cover z-10 hover:z-0 hover:opacity-20' src={d.img} alt="" />
          <h3 className='text-lg absolute font-bold text-white'>{d.title}</h3>
        </div>
        )
        )}
      </div>
    </div>
  )
}
