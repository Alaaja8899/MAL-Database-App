import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import HeaderMenue from "./Component/HeaderMenue"
import Anime from "./Component/Anime"
import { useAnimeContext } from "./context/AnimeContext"
import AnimeRotData from "./AnimeRotData"
import { data } from "autoprefixer/lib/autoprefixer"


function App() {
  const {RoteID}= useAnimeContext()


  return (
    <div>
        <Routes>
          <Route path="/" element={<Anime/>} />
          <Route path={"/Anime/:id"} element={<AnimeRotData/>} />

        </Routes>
    </div>
  )
}


export default App

