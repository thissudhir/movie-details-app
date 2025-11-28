import { TMDB_CONFIG } from "@/config/config";
import axios from "axios";


export const fetchPopularMovies = async ({ query }: { query: string }) => {
    const endpoint = query ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
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

export const fetchMovieDetails = async (movieId: string): Promise<MovieDetails> => {
    const endpoint = `${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`
    try {
        const response = await axios.get(
            endpoint, {
            method: "GET",
            headers: TMDB_CONFIG.headers,
        })
        const data = response.data;
        return data;
    }
    catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
    }
}

export const fetchMovieVideos = async (movieId: number) => {
    try {
        const response = await axios.get(
            `${TMDB_CONFIG.BASE_URL}/movie/${movieId}/videos?language=en-US`, {
            method: "GET",
            headers: TMDB_CONFIG.headers,
        })
        const data = response.data;
        return data.results;
    }
    catch (error) {
        console.error("Error fetching movie videos:", error);
        throw error;
    }
}