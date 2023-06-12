import { useState } from "react";

export default function FavoriteWordForm({setFavoriteWord}) {
    const [newFavoriteWord, setNewFavoriteWord] = useState({
        word: '',
        definition: '',
        example: '',
    })

    const handleChange = (event) => {
        const keyName = event.target.name;
        const allWords = {
            ...newFavoriteWord,
            [keyName]: event.target.value
        };
        setNewFavoriteWord(allWords)
    }

    const handleAddFavoriteWord = (event) => {
        event.preventDefault()
        setFavoriteWord(function(previusWordsArray) {
            return [...previusWordsArray, newFavoriteWord]
        });

        setNewFavoriteWord({
            word: '',
            definition: '',
            example: '',
        });
    };

    return(
        <form className="FavoriteWordForm" onSubmit={handleAddFavoriteWord}>
            <label for='word'>Word:</label>
            <input 
            type='text'
            name='word'
            placeholder='New Favorite Word' 
            value={newFavoriteWord.name} 
            onChange={handleChange}
            ></input>
            <label for='definition'>Definition:</label>
            <input 
            type='text'
            name='definition'
            placeholder='Definition' 
            value={newFavoriteWord.name} 
            onChange={handleChange}
            ></input>
            <label for='example'>Example:</label>
            <input 
            type='text'
            name='example' 
            value={newFavoriteWord.name} 
            onChange={handleChange}
            ></input>
             <button type="submit">Add Favorite Word</button>
        </form>
    )

}



