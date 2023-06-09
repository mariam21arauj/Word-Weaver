import { set } from 'mongoose';
import React, { useState } from 'react'


export default function SearchBarCard() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [dictionarySearch, setDictionarySearch] = useState(true)
    const [thesaurusSearch, setThesaurusSearch] = useState(false)

    const handleSearch = async() => {
        try {
            const response = await fetch(
                `http://127.0.0.1:3001/api/search/${searchQuery}`,
            );
            const data = await response.json();
            setSearchResults(data)
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        if(e.target.name === 'dictionary') {
            setDictionarySearch(true);
            setThesaurusSearch(false)
        } else {
            setDictionarySearch(false);
            setThesaurusSearch(true)
        }
    }
    console.log(searchResults)
    return (
        <div>
            <input 
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <label> Dictionary
                <input 
                type='radio'
                name='dictionary'
                checked={dictionarySearch} onChange={handleChange}
                />
            </label>
            <label> Thesaurus
                <input
                type="radio"
                name="thesaurus" 
                checked={thesaurusSearch} onChange={handleChange} />
            </label>
            <button onClick={handleSearch}>Search</button>
            {/* <ul>
                {searchResults.map(result => (
                    <li key={result.word}>{result.word}</li>
                ))}
            </ul> */}
        </div>
    )
}