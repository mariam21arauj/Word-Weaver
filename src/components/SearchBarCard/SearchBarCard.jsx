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
            setSearchType('examples')
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
            <label> Definitions
                <input 
                type='radio'
                name='dictionary'
                checked={searchType === 'dictionary'} 
                onChange={handleChange}
                />
            </label>
            <label> Examples
                <input
                type="radio"
                name="examples" 
                checked={searchType === 'examples'} 
                onChange={handleChange} />
            </label>
            <button onClick={handleSearch}>Search</button>
            <div>
            <h2>Word: {searchResults.word}</h2>
                {searchResults && searchResults.word && searchResults.results && searchResults.results.length > 0 && (
                searchResults.results.map((result) => {
                    if (searchType === 'dictionary') {
                    return (
                        <>
                        <ul key={result.word}>
                            <li>
                            <span>Definition: {result.definition}</span> 
                            &nbsp;&nbsp;
                            &nbsp; | &nbsp;
                            <span>Part of Speech: {result.partOfSpeech}</span>
                            </li>
                            
                        </ul>
                        </>
                        
                    );
                    } else {
                        return (
                            <li key={result.word}>
                                {result.examples}
                            </li>
                        );
                    }
                })
            )}
            {!(searchResults && searchResults.results && searchResults.results.length > 0) && (
                <li>No results found.</li>
            )}
            </div>
        </div>
    )
}