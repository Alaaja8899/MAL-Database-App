import React, { useEffect, useState } from 'react'
import SearchResult from './SearchResult'
import axios from 'axios'
import Popular from './Popular'

export default function SearchAnime() {

    const [result , setResult] = useState([])
    const [searching , setSearching] = useState(false)
    const [textInput , setTextInput]=useState("")

   const getAnime=()=>{
    axios.get(` https://api.jikan.moe/v4/anime?q=${textInput}`).then(data=>{
        setResult(data.data.data)
    })
   }

    useEffect(()=>{
        textInput.length>0 ?  setSearching(true):setSearching(false)
        if (searching){
            getAnime()
        }
    } , [searching , textInput])
    return (
        <div className="searchContainer pt-28 container mx-auto flex items-center justify-center w-full flex-col">
          <form onSubmit={(e)=>e.preventDefault()} className='flex gap-2 items-center md:w-2/3 w-full justify-center  px-4'>
            <input type="text" placeholder='Type Anime name ...' onChange={(e)=> setTextInput(e.target.value)} className='text-[#000] outline-none px-3 py-2 w-full border-2 border-mainColor rounded' />
            <button className=' bg-mainColor text-[#fff] px-3 py-2 rounded'>Search</button>
         </form>
            
            <div className='w-full'>
                
            {searching && result.length >0 && <Popular Search={result} type="Search" info={`Result come from the word ::: ${textInput} `} />}

            </div>

        </div>
  )
}
