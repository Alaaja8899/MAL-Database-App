import React from 'react'
import AnimeCard from './AnimeCard'
import { useAnimeContext } from '../context/AnimeContext'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const SlideSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 5
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0
      }
    }
  ]
};

function Popular(props) {
    const {popular , airing , upcoming} = useAnimeContext();
    let data;
    if (props.type == "airing"){
        data=airing
    }else if(props.type == "popular"){
      data = popular
    }
    else if (props.type == "upcoming"){
      data = upcoming
    }else if (props.Search.length >0){
      data = props.Search
    }
  return (
    <div className='Popular'>

        <div className="container mx-auto px-4 py2">
        <h2 className='border-l-[6px] border-mainColor gap-3 px-1 font-bold text-2xl mt-10 capitalize'>{props.type}</h2>
          <p className='text-[grey] mt-2'>{props.info}</p>
          <div className="animeContainer flex overflow-x-auto gap-5 mt-4">
            {
                data.map((animeData)=> <AnimeCard data={animeData}/>)
            }

            </div>

        </div>

    </div>
  )
}

export default Popular
