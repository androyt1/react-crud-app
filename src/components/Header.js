import React from 'react'
import { header, } from '../data'

const Header = () => {
    const{title,title_paragraph}=header
  return (
    <div className='w-full'>
        <header className='w-full text-center py-4 md:py-8'>
        <h1 className='uppercase text-stone-600 font-medium text-2xl'>{title}</h1>
        <p className='w-full md:w-[70%] mx-auto mt-2 text-stone-600'>{title_paragraph} </p>
        </header>
    </div>
  )
}

export default Header