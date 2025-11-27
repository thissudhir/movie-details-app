import axios from "axios";

export const TMDB_CONFIG = {
    BASE_URL:
        process.env.EXPO_PUBLIC_API_BASE_URL || "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_API_KEY,
    ACCESS_TOKEN: process.env.EXPO_PUBLIC_API_ACCESS_TOKEN_KEY,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_ACCESS_TOKEN_KEY}`,
    },
};
export const fetchPopularMovies = async ({ query }: { query: string }) => {
    const endpoint = query ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}&language=en-US` : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc&language=en-US`;
    try {
        const response = await axios.get(
            endpoint, {
            method: "GET",
            headers: TMDB_CONFIG.headers,
        })
        const data = response.data;
        return data.results;
    }
    catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
    }
}
const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjFjN2RkYjYyNWUzMzUwZWE3Y2QzYWNhZjk3MDY3MiIsIm5iZiI6MTc2NDI2NzIwOS42MjUsInN1YiI6IjY5Mjg5NGM5NzNiNTNjYmUxZjI2YzQwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NwCXMZ8UEZBJaUj6fijG5BvaV8HdhJbbOd1187R7TPc",
    },
};

axios
    .request(options)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
