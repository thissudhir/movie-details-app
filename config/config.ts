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