export default function FavoriteWordCard({favoriteWord}) {
    let {word, definition, example} = favoriteWord
    return(
        <li>
            <div>Word: {word}</div>
            <div>Definition: {definition}</div>
            <div>Example: {example}</div>
        </li>
    )
}
