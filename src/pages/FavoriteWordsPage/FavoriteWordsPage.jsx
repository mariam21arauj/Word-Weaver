import { useState } from "react"

export default function FavoriteWordsPage(){
    const [favoriteWord, setFavoriteWord] = useState([])
    return(
        <div>
            <h1>Your Favorite Words</h1>
            {/* <FavoriteWordListCard/>
            <hr></hr>
            <FavoriteWordForm/> */}
        </div>
        
    )
}