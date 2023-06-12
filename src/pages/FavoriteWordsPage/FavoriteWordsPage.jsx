import { useState } from "react"
import FavoriteWordForm from "../../components/FavoriteWordForm/FavoriteWordForm"
import FavoriteWordListCard from "../../components/FavoriteWordList/FavoriteWordListCard"

export default function FavoriteWordsPage(){
    const [favoriteWord, setFavoriteWord] = useState([])
    return(
        <div>
            <h1>Your Favorite Words</h1>
            <FavoriteWordListCard favoriteWord={favoriteWord}/>
            <hr></hr>
            <FavoriteWordForm setFavoriteWord={setFavoriteWord}/>
        </div>
        
    )
}