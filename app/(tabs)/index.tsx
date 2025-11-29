import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, RefreshControl, ScrollView, Text, View } from "react-native";

import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import TrendingCard from "@/components/TrendingCard";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import useFetch from "@/hooks/useFetch";
import { fetchPopularMovies } from "@/services/api";
import { useCallback, useMemo, useState } from "react";

export default function Index() {
    const router = useRouter();
    const { data: movies, loading: moviesLoading, error: moviesError, refetch } = useFetch(() => fetchPopularMovies({ query: '' }));
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await refetch();
        setRefreshing(false);
    }, [refetch]);

    const topRatedMovies = useMemo(() => {
        if (!movies) return [];
        return [...movies]
            .sort((a, b) => b.vote_average - a.vote_average)
            .slice(0, 10);
    }, [movies]);

    return (
        <View
            className="flex-1 bg-primary"
        >
            <Image source={images.bg} className="z-0 w-full absolute" />
            <ScrollView
                className="flex-1 px-5 mt-7"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                } >
                <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

                {moviesLoading ? (
                    <ActivityIndicator size="large" color="#ffffff" className="mt-10" />
                ) : moviesError ? (
                    <Text>Error loading movies: {moviesError.message}</Text>
                ) : (
                    <View className="flex-1 mt-5" >
                        <SearchBar onPress={() => router.push('/search')} placeholder="Search for the movie" />
                        <>
                            <Text className="text-white font-bold text-xl mt-5 mb-3">Top Rated Movies</Text>
                            <FlatList
                                data={topRatedMovies}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => (
                                    <TrendingCard {...item} rank={index + 1} />
                                )}
                                keyExtractor={(item) => item.id.toString()}
                                className="mb-4 mt-3"
                                horizontal
                                ItemSeparatorComponent={() => <View className="w-4" />}
                            />
                            <Text className="text-white font-bold text-xl mt-5 mb-3">Latest Movies</Text>
                            <FlatList
                                data={movies}
                                renderItem={({ item }) => (
                                    <MovieCard {...item} />
                                )}
                                keyExtractor={(item) => item.id.toString()}
                                numColumns={3}
                                columnWrapperStyle={{
                                    justifyContent: 'flex-start',
                                    gap: 16,
                                    marginBottom: 10,
                                    paddingRight: 5,
                                }}
                                className="mt-2 pb-32"
                                scrollEnabled={false}
                            />
                        </>
                    </View>
                )}
            </ScrollView >
        </View >
    );
}