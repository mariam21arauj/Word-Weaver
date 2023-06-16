import { useState, useEffect } from "react"
import FavoriteWordForm from "../../components/FavoriteWordForm/FavoriteWordForm"
import FavoriteWordListCard from "../../components/FavoriteWordList/FavoriteWordListCard"
import { getToken } from "../../utilities/users-service";
import './FavoriteWordsPage.css'


export default function FavoriteWordsPage() {
    const [favoriteWord, setFavoriteWord] = useState([]);
    const fetchFavoriteWords = async () => {
        try {
            const token = getToken(); // Replace with your actual authentication token 
            const response = await fetch("/api/users/show-favorite-word", {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setFavoriteWord(data);
            } else {
                throw new Error("Failed to fetch favorite words");
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchFavoriteWords();
    }, []);
    return (
    <div>
        <div>
            <h1 id="addFavoriteWords-section">Add a New Favorite Word</h1>
            <FavoriteWordForm setFavoriteWord={setFavoriteWord} />
        </div>
        <div id="favoriteWords-section">
            <FavoriteWordListCard favoriteWord={favoriteWord} />
        </div>
    </div>
    );
}