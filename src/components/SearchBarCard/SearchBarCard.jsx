import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

export default function SearchBarCard() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // const [data, setData] = useState([])

//   useEffect(()=>{
//     const options = {
//       method: 'GET',
//       url: `http://127.0.0.1:3001/api/${searchQuery}`,
//       headers: {
//         'X-RapidAPI-Key':process.env.API_KEY,
//         'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'

//       }
//     }
//     axios.request(options)
//     .then(function (response) {
//         setData(response.data.data)
//     })
//     .catch(function (error) {
//         console.error(error);
//     })  
//   }, [searchQuery])

//   console.log(data)
    const handleSearch = async() => {
        try {
            const response = await fetch(
                `http://127.0.0.1:3001/api/${searchQuery}`
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