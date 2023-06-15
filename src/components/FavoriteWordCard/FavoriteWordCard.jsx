import './FavoriteWordCard.css'
export default function FavoriteWordCard({favoriteWord}) {
    let {word, definition, example} = favoriteWord
    return(
        <div className='card-container'>
            <div className='card'>    
                    <div>Word: {word}</div>
                    <div>Definition: {definition}</div>
                    <div>Example: {example}</div>
            </div>
        </div>
        
        
    )
}
