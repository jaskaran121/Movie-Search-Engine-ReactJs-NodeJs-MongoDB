import axios from "axios";
export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" }
];

export async function getGenres() {
  const get_movies = await axios.get("http://localhost:8000/api/genres");
  return get_movies.data.sucess;
}
