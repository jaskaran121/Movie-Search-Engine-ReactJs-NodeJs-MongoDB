import axios from "axios";

export async function getGenres() {
  const get_movies = await axios.get("http://localhost:8000/api/genres");
  return get_movies.data.sucess;
}
