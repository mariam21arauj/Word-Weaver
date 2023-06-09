import React, { useState } from 'react'


export default function SearchBarCard() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async() => {
        try {
            const response = await fetch(
                `http://127.0.0.1:3001/api/search/${searchQuery}`,
            );
            const data = await response.json();
            console.log(data)
            setSearchResults(data)
        } catch (error) {
            console.log(error);
        }
    };
    console.log(searchResults)
    return (
        <div>
            <input 
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {/* <ul>
                {searchResults.map(result => (
                    <li key={result.word}>{result.word}</li>
                ))}
            </ul> */}
        </div>
    )
}