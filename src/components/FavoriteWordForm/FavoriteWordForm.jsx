import { useState } from "react";
import { getToken } from "../../utilities/users-service";
import sendRequest  from "../../utilities/send-request"
import './FavoriteWordForm.css'
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
      try {
        const token = getToken(); // Get the authentication token
        console.log(token)
        const response = await sendRequest(
          "/api/users/favorite-word",
          "POST",
           newFavoriteWord, // Pass newFavoriteWord as part of the payload object
          {Authorization: `Bearer ${token}`},
        );
        const updatedFavoriteWords = response;
        // console.log(updatedFavoriteWords);
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
            <label style={{fontWeight: 400}} for='word'>Word:</label>
            <input 
            type='text'
            name='word'
            placeholder='New Favorite Word' 
            value={newFavoriteWord.word} 
            onChange={handleChange}
            ></input>
            <label style={{fontWeight: 400}} for='definition'>Definition:</label>
            <input 
            type='text'
            name='definition'
            placeholder='Definition' 
            value={newFavoriteWord.definition} 
            onChange={handleChange}
            ></input>
            <label style={{fontWeight: 400}} for='example'>Example:</label>
            <input 
            type='text'
            name='example' 
            value={newFavoriteWord.example} 
            onChange={handleChange}
            ></input>
             <button id="btn1-favoriteWord" className="btn1" type="submit">Add Favorite Word</button>
        </form>
    )

}



