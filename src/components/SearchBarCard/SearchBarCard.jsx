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
                name='definitions'
                checked={searchType === 'definitions'} 
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
                            </li>
                            
                        </ul>
                        </>
                        
                    );
                    } if (searchType === 'examples') {
                        if (result.examples && result.examples.length > 0) {
                            return (
                                <ul>
                                    <li key={result.word}>
                                        {result.examples.map((example, index) => (
                                            <span key={index}>{example}</span>
                                        ))}
                                    </li>
                                </ul>
                            );
                        } if(!result.examples){
                            return <p>No examples found for this word. Check out our definitions option to learn more about this.</p>;
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