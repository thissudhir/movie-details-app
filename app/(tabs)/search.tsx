import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'

import MovieCard from '@/components/MovieCard'
import SearchBar from '@/components/SearchBar'
import { images } from '@/constants/images'
import useFetch from '@/hooks/useFetch'
import { fetchPopularMovies } from '@/services/api'

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError,
        refetch: loadMovies,
        reset
    } = useFetch(() => fetchPopularMovies({ query: searchQuery }), false);

    useEffect(() => {
        const timeoutFetch = setTimeout(async () => {
            if (searchQuery.trim()) {
                loadMovies();
            } else {
                reset();
            }
        }, 500); // Debounce time of 500ms
        return () => clearTimeout(timeoutFetch);
    }, [searchQuery]);

    return (
        <View className='flex-1 bg-primary'>
            <Image
                source={images.bg}
                className='flex-1 absolute w0full z-0'
                resizeMode='cover'
            />
            <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent: 'center',
                    gap: 16,
                    marginVertical: 16,
                }}
                className='px-5'
                contentContainerStyle={{ paddingBottom: 100 }}
                ListHeaderComponent={
                    <>
                        <View className='w-full flex-row justify-center mt-20 items-center'>
                            <Image source={images.appLogo} className='w-20 h-16' />
                        </View>
                        <View className='my-5'>
                            <SearchBar
                                placeholder='Search for movies...'
                                value={searchQuery}
                                onChangeText={(text: string) => setSearchQuery(text)}
                            />
                        </View>
                        {moviesLoading && (
                            <ActivityIndicator size="large" color="#0000ff" className="my-3" />
                        )}
                        {moviesError && (
                            <Text className='text-red-500 px-5 my-3'>Error loading movies: {moviesError.message}</Text>
                        )}
                        {!moviesLoading && !moviesError && searchQuery.trim() && movies?.length! > 0 && (
                            <Text className='text-white text-xl font-bold'>Search Result for {''}
                                <Text className='text-accent'>{searchQuery}</Text>
                            </Text>
                        )}
                    </>
                }
                ListEmptyComponent={
                    !moviesLoading && !moviesError ? (
                        <View className="mt-10 px-5">
                            <Text className="text-center text-gray-500">
                                {searchQuery.trim()
                                    ? "No movies found"
                                    : "Start typing to search for movies"}
                            </Text>
                        </View>
                    ) : null
                }
            />

        </View>
    )
}

export default Search