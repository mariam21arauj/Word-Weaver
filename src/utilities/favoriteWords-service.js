import * as favoriteWordsAPI from './favoriteWords-api' 

export async function deleteFavoriteWord(id) {
    const response = await favoriteWordsAPI.deleteFavoriteWord(id);
    return response;
}