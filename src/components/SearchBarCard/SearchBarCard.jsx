import React, { useState } from 'react'
import './SearchBarCard.css'

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
            setSearchType('synonyms')
        }
    }
    
    return (
        <div>
            <div className='radioContainer'>
                <div className='selector'>
                    <input
                    id='searchBox'
                    placeholder='Search Word'
                    label='searchBar'
                    type='text'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                <div className='selector-item'>
                    <input 
                        id='radio1'
                        className='selector-item_radio'
                        type='radio'
                        name='definitions'
                        checked={searchType === 'definitions'} 
                        onChange={handleChange}
                        />
                    <label for = "radio1" className='selector-item_label'>Definitions</label>
                </div>
                <div className='selector-item'>
                    <input
                        id='radio2'
                        className='selector-item_radio'
                        type="radio"
                        name="synonyms" 
                        checked={searchType === 'synonyms'} 
                        onChange={handleChange} 
                    />
                    <label  for = "radio2" className='selector-item_label'> Synonyms</label>
                </div>
                <button onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div>
                <div className='word'>
                    <h2>Word: {searchResults.word}</h2>
                </div>
                {searchResults.results && searchResults.results.length > 0 && (
                searchResults.results.map((result) => {
                    if (searchType === 'definitions') {
                        if(result.examples && result.examples.length > 0){
                            return (
                                <>
                                <div className='searchBar-card-container'>
                                <div className='searchBar-card' key={result.definition}> 
                                    <h3>Definition:</h3> 
                                    <p>{result.definition}</p>
                                    <h3>Part of Speech:</h3>
                                    <p>{result.partOfSpeech}</p>
                                    <h3>Examples:</h3>
                                    <p>{result.examples}</p>
                                </div>
                                </div>
                                </>
                                
                            );
                        }
                        else{
                            if(!result.examples){
                                return (
                                    <>
                                        <div className='searchBar-card-container'>
                                            <div className='searchBar-card' key={result.definition}>    
                                                <h3>Definition:</h3> 
                                                <p>{result.definition}</p>
                                                <h3>Part of Speech:</h3>
                                                <p>{result.partOfSpeech}</p>
                                                <h3>Examples:</h3>
                                                <p>No examples found.</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        }
                    } if (searchType === 'synonyms') {
                        if (result.synonyms && result.synonyms.length > 0) {
                            return (
                                <>
                                    <div className='searchBar-card-container' key={result.word}>
                                        <div className='searchBar-card'>
                                            {result.synonyms.map((synonyms, index) => (
                                                    <p key={index}>{synonyms}</p>
                                            ))}
                                        </div>
                                    </div>
                                </>
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