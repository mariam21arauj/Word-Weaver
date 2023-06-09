import React, { useState } from 'react'

export default function SearchBarCard() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchType, setSearchType] = useState('dictionary')

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
            setSearchType('dictionary')
        } else {
            setSearchType('thesaurus')
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
                checked={searchType === 'dictionary'} 
                onChange={handleChange}
                />
            </label>
            <label> Thesaurus
                <input
                type="radio"
                name="thesaurus" 
                checked={searchType === 'thesaurus'} 
                onChange={handleChange} />
            </label>
            <button onClick={handleSearch}>Search</button>
            <ul>
                {searchResults && searchResults.results && searchResults.results.length > 0 ? (
                    searchResults.results.map((result) => (
                        <li key={result.word}>
                            {searchType === 'dictionary' ? result.definition : result.synonyms}
                        </li>
                    ))
                ) : (
                    <li>No results found.</li>
                )}
        </ul>
        </div>
    )
}