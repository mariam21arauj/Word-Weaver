import sendRequest from "./send-request";
const BASE_URL = '/api/users'

export function deleteFavoriteWord(id) {
    return sendRequest(`${BASE_URL}/delete-favorite-word/${id}`, "DELETE");
}