import { useState } from "react";

export default function FavoriteWordForm() {
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
        setSkills(function(previusWordsArray) {
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
            
        </form>
    )

}



