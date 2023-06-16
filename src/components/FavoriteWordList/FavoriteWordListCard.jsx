import FavoriteWordCard from "../FavoriteWordCard/FavoriteWordCard";
import { deleteFavoriteWord } from "../../utilities/favoriteWords-service";
import { useState } from "react";
import { useEffect } from "react";


export default function FavoriteWordListCard({ favoriteWord }) {
  const [favoriteWords, setFavoriteWords] = useState(favoriteWord);

  useEffect(() => {
    setFavoriteWords(favoriteWord);
  }, [favoriteWord]);

  const handleDelete = async (id) => {
    try {
      await deleteFavoriteWord(id);
      setFavoriteWords((prevFavoriteWords) =>
        prevFavoriteWords.filter((word) => word._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  console.log(favoriteWords);
  const favoriteWordsList = favoriteWords.map((f, idx) => {
    return (
      <FavoriteWordCard
        favoriteWord={f}
        key={idx}
        onDelete={() => handleDelete(f._id)}
      />
    );
  });

  return <ul>{favoriteWordsList}</ul>;
}
