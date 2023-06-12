import { useState } from "react";
import { getToken } from "../../utilities/users-service";
import sendRequest  from "../../utilities/send-request"
// import user from "../../../models/user";

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


    const handleAddFavoriteWord = async (event) => {
      event.preventDefault();
      console.log('hi')
      try {
        const token = getToken(); // Get the authentication token
        console.log(token)
        const response = await sendRequest(
          "/api/users/favorite-word",
          "POST",
           newFavoriteWord, // Pass newFavoriteWord as part of the payload object
          {Authorization: `Bearer ${token}`},
        );
        console.log(response,)
        const updatedFavoriteWords = response.data;
        console.log(updatedFavoriteWords);
        setFavoriteWord(updatedFavoriteWords);
        setNewFavoriteWord({
          word: "",
          definition: "",
          example: "",
        });
      } catch (error) {
        console.log(error);
      }
    };
    

    

    return(
        <form className="FavoriteWordForm" onSubmit={handleAddFavoriteWord}>
            <label for='word'>Word:</label>
            <input 
            type='text'
            name='word'
            placeholder='New Favorite Word' 
            value={newFavoriteWord.word} 
            onChange={handleChange}
            ></input>
            <label for='definition'>Definition:</label>
            <input 
            type='text'
            name='definition'
            placeholder='Definition' 
            value={newFavoriteWord.definition} 
            onChange={handleChange}
            ></input>
            <label for='example'>Example:</label>
            <input 
            type='text'
            name='example' 
            value={newFavoriteWord.example} 
            onChange={handleChange}
            ></input>
             <button type="submit">Add Favorite Word</button>
        </form>
    )

}



