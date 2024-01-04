import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';
export const AnimeContext= createContext();
export const baseUrl = "https://api.jikan.moe/v4"

const AnimeContextProvider = ({children}) => {

    const [popular , setPopular]=useState([])
    const [airing , setAiring]=useState([])
    const [upcoming , setUpcoming]=useState([])
    const [RoteID , setRoteID]=useState()


    const GetPopularAnime=()=>{
        axios.get(`${baseUrl}/top/anime?filter=bypopularity`).then(data=>{
            setPopular(data.data.data)
        })
    }
    const GetAiringAnime=()=>{
        axios.get(`${baseUrl}/top/anime?filter=airing`).then(data=>{
            setAiring(data.data.data)
        })
    }
    const GetUpcomingAnime=()=>{
        axios.get(`${baseUrl}/top/anime?filter=upcoming`).then(data=>{
            setUpcoming(data.data.data)
        })
    }
    useEffect(()=>{
        GetPopularAnime();
        GetAiringAnime();
        GetUpcomingAnime();
    } , [])
    const contextValue = {popular , RoteID , setRoteID , airing , upcoming}
  return (
    <AnimeContext.Provider value={contextValue}>
        {children}
    </AnimeContext.Provider>
  )
}

export const useAnimeContext=()=>{
    return useContext(AnimeContext);
}

export default AnimeContextProvider
