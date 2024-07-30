import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function AnimeRotData() {
  const { id } = useParams();
  const [anime, setAnime] = useState({});
  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
        setAnime(response.data.data);
    };

    fetchData();
  }, [id]);


  return (
    <div className='container mx-auto px-4 py-2 flex  flex-col'>
      <h2 className='border-l-[6px] border-mainColor gap-3 px-1 font-bold text-2xl mt-10 mb-10'>{anime.title}</h2>
      
      <div className="center-d flex flex-col md:flex-row items-center">



      <div className="AnimeInfo flex gap-7   w-full">
       <div className="side">
       {anime && anime.images &&( <img src={anime.images.jpg.image_url} />)}
       </div>

      <div className="realData">
            <p>Name : {anime.title}</p>
            <p>Rank : {anime.rank}</p>
            <p>Rating : {anime.rating}</p>
            <p>Scored By :{anime.scored_by} </p>
            <p>Type : {anime.type}</p>
            <p>Duration : {anime.duration}</p>
            <p>Episodes : {anime.episodes}</p>
            <p>Genres : {anime && anime.genres && (
  anime.genres.map((gen, index) => (
    <span key={index}>{`${gen.name}${index !== anime.genres.length - 1 ? ', ' : ''}`}</span>
  ))
)}</p>

            <p>Season : {anime.season}</p>
            <p>popularityNumber : {anime.popularity}</p>
      </div>
      
      </div>


      <div className='trailer w-full flex  flex-col h-[400px]'>
      <h2 className='border-l-[6px] border-mainColor gap-3 px-1 font-bold text-2xl mt-10 mb-10'>Trailer</h2>

      {anime.trailer && anime.trailer.embed_url && (
        <iframe
        width={"100%"}
          title="anime-trailer"
          src={anime.trailer.embed_url}
          frameBorder="0"
          allowFullScreen
          onPlay={onabort}
        className=' w-full h-full' ></iframe>
      )}

      </div>



      </div>





    </div>
  );
}
