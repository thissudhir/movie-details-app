import Constants from "expo-constants";

export const TMDB_CONFIG = {
    BASE_URL:
        Constants.expoConfig?.extra?.EXPO_PUBLIC_API_BASE_URL || "https://api.themoviedb.org/3",
    API_KEY: Constants.expoConfig?.extra?.EXPO_PUBLIC_API_KEY,
    ACCESS_TOKEN: Constants.expoConfig?.extra?.EXPO_PUBLIC_API_ACCESS_TOKEN_KEY,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${Constants.expoConfig?.extra?.EXPO_PUBLIC_API_ACCESS_TOKEN_KEY}`,
    },
};