import React from 'react'
import Popular from './Popular'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import HeaderMenue from './HeaderMenue'
import SearchAnime from './SearchAnime'
function Anime() {
  return (
    <div className=''>
      
      <HeaderMenue/>

      <SearchAnime/>


        <Popular type={"popular"} info={"most Popular anime's"}/>
        <Popular type={"airing"} info={"aring now"} />
        <Popular type={"upcoming"}  info="upcoming decent ones " />

    </div>
  )
}

export default Anime
