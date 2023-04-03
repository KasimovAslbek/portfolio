import React from 'react'

export default function PortfolioList({id, title, active, setSelected }) {
  return (
    <li className='p-2 cursor-pointer'><span className= {active ? 'portfolioList bg-slate-700 text-white rounded-lg p-2'  : 'portfolioList '} onClick={()=>setSelected(id)} >{title}</span></li>
  )
}
