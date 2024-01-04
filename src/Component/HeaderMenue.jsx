import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/MyAnimeList_Logo.png'
function HeaderMenue() {
  return (
    <header className='h-[83px] bg-slate-50 bg-mainColor text-[#fff] fixed left-0 right-0'>

        <div className="container mx-auto flex items-center justify-between px-4 py-2 h-full md:flex-row flex-col">
        <h2 className='flex items-center font-bold text-2xl h-full gap-2'>
            <img src={logo}  className="max-h-full" />
        </h2>


        </div>


    </header>
  )
}

export default HeaderMenue
