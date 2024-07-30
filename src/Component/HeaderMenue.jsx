import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/MyAnimeList_Logo.png'
function HeaderMenue() {
  return (
    <header className='h-[83px] bg-slate-50 bg-mainColor text-[#fff] fixed left-0 right-0'>

        <div className="container mx-auto flex items-center justify-between px-4 py-2 h-full md:flex-row ">
        <h2 className='flex items-center font-bold text-2xl h-full gap-2'>
            <img src={logo}  className="max-h-full" />
        </h2>


          <a href="https://github.com/Alaaja8899/MAL-Database-App" target='_blank'>
            <img
            className='w-[40px] h-[40px] rounded-full'
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"/>
          </a>


        </div>


    </header>
  )
}

export default HeaderMenue
