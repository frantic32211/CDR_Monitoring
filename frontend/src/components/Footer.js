import React from 'react'

const Footer = () => {
  return (
    <div className='h-10 w-full bg-slate-400 text-center content-center'>
      <p className='font-thin italic'>
        <span className='font-semibold'>Copyright </span > © <span className='font-semibold'> 2020-{new Date().getFullYear()} </span>  
        <a href="https://www.telgoo5.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800">
        TELGOO5.
        </a>  
        All rights reserved.
      </p>
    </div >
  )
}

export default Footer