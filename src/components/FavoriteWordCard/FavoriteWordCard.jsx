import './FavoriteWordCard.css'

export default function FavoriteWordCard({ favoriteWord, onDelete }) {
  const { word, definition, example } = favoriteWord;

  return (
    <div className='card-container'>
      <div className='card'>    
        <div><span style={{fontWeight: 800 }}>Word:</span> {word}</div>
        <hr></hr>
        <div><span style={{fontWeight: 800 }}>Definition:</span> {definition}</div>
        <hr></hr>
        <div><span style={{fontWeight: 800 }}>Example:</span>: {example}</div>
        <button style={{marginTop:20}} className='btn1' onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
