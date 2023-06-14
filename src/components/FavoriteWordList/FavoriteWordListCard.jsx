import FavoriteWordCard from "../FavoriteWordCard/FavoriteWordCard";

export default function FavoriteWordListCard({favoriteWord}) {
    console.log(favoriteWord)
    const favoriteWordsList = favoriteWord.map((f, idx) => {
        return <FavoriteWordCard favoriteWord={f} key={idx}/>
    })
    return(
        <ul>
            {favoriteWordsList}
        </ul>
    )
}