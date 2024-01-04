import React from 'react'
import { Link , BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { useAnimeContext } from '../context/AnimeContext'
function AnimeCard(props) {
    const {title , images , mal_id , score , type , year } = props.data
    const {setRoteID} =useAnimeContext()
  return (
    <Link to={`Anime/${mal_id}`}>
      <div id="animeCard" className='w-[150px] h-[300px]'>
        <div className="img-Container h-[200px]">
        <img src={images.jpg.image_url} className="w-full h-full"/>
        </div>
        <h1 className="w-full truncate">{title}</h1>

        <div className="info flex w-full justify-between rounded  p-1  bg-mainColor text-[#fff]">
          <p>{type}</p>
          <p>{year}</p>
          <p>{score}/10</p>
        </div>
      </div>
    </Link>
  )
}




export default AnimeCard
