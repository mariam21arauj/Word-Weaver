import React, { useState } from 'react'

export default function SearchBarCard() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchType, setSearchType] = useState('definitions')


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
        if(e.target.name === 'definitions') {
            setSearchType('definitions')
        } else {
            setSearchType('examples')
        }
    }
    
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
                name='definitions'
                checked={searchType === 'definitions'} 
                onChange={handleChange}
                />
            </label>
            <label> Synonyms
                <input
                type="radio"
                name="examples" 
                checked={searchType === 'examples'} 
                onChange={handleChange} />
            </label>
            <button onClick={handleSearch}>Search</button>
            <div>
            <h2>Word: {searchResults.word}</h2>
                {searchResults.results && searchResults.results.length > 0 && (
                searchResults.results.map((result) => {
                    if (searchType === 'definitions') {
                    return (
                        <>
                        <ul key={result.word}>
                            <li>
                            <span>Definition: {result.definition}</span> 
                            &nbsp;&nbsp;
                            &nbsp; | &nbsp;
                            <span>Part of Speech: {result.partOfSpeech}</span>
                            &nbsp;&nbsp;
                            &nbsp; | &nbsp;
                            <span>Examples: {result.examples}</span>
                            </li>
                            
                        </ul>
                        </>
                        
                    );
                    } if (searchType === 'examples') {
                        if (result.synonyms && result.synonyms.length > 0) {
                            return (
                                    <span key={result.word}>
                                        {result.synonyms.map((synonyms, index) => (
                                            <ul>
                                                <li key={index}>{synonyms}</li>
                                            </ul>
                                        ))}
                                    </span>
                            );
                        }
                        }
                        else {
                            if (!result.synonymss){
                            return (
                                <p>No synonyms found</p>
                            )
                        }
                        }
                    })
                    )}
                    {!( searchResults.results && searchResults.results.length > 0) && (
                        <li>No results found.</li>
                        )}
                        </div>
        </div>
    )
}