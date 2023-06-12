export default function FavoriteWordCard({favoriteWord}) {
    let {word, definition, example} = favoriteWord
    return(
        <li>
            <div>{word}</div>
            <div>{definition}</div>
            <div>{example}</div>
        </li>
    )
}
