import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import MovieInfo from '@/components/MovieInfo';
import useFetch from '@/hooks/useFetch';
import { fetchMovieDetails } from '@/services/api';

const MovieDetails = () => {
    const { id } = useLocalSearchParams();
    const { data: movies, loading, error } = useFetch(() => fetchMovieDetails(id as string));
    return (
        <View className="flex-1 bg-primary">
            <TouchableOpacity className='absolute w-14 h-14 left-0 right-0 top-10 py-3.5 bg-accent/40 z-50 mx-5 rounded-full flex-row items-center justify-center shadow-md border border-[#BCBCBC] backdrop-blur-sm' onPress={router.back}>
                <Ionicons name="arrow-back" size={24} color={"#ffffff"} />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                <View>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${movies?.poster_path}` }} className='w-full h-[550px]'
                        resizeMode='stretch'
                    />

                </View>
                <View className='flex-col items-start justify-center mt-5 px-5'>
                    <View className='flex-row items-center justify-between w-full'>
                        <Text className='text-white text-3xl font-bold mb-3'>{movies?.title}</Text>
                        <MaterialIcons name="bookmark-add" size={28} color="red" />
                    </View>
                    <View className='flex-row item-center gap-x-1 mt-1'>
                        <Text className='text-light-200 text-sm'>{movies?.release_date}</Text>
                        <Text className='text-light-200 text-sm'>{movies?.runtime}minute</Text>
                    </View>
                    <View className='flex-row items-center rounded-md px-2 py-1 mt-2 bg-dark-100'>
                        <Ionicons name="star" size={14} color={"#facc15"} />
                        <Text className='text-yellow-400 text-sm ml-1'>{movies?.vote_average}/10 ({movies?.vote_count} votes)</Text>
                    </View>
                    <MovieInfo label="Overview" value={movies?.overview} />
                    <MovieInfo label="Genres" value={movies?.genres?.map((g) => g.name).join(' - ') || ' N / A'} />
                    <View className='flex flex-row justify-between w-1/2'>
                        <MovieInfo label="Budget" value={`$${movies?.budget ? movies.budget / 1000000 : 0} million`} />
                        <MovieInfo label="Revenue" value={`$${movies?.revenue ? movies.revenue / 1000000 : 0} million`} />
                    </View>
                    <MovieInfo label="Production Companies" value={movies?.production_companies?.map((c) => c.name).join(' - ') || ' N / A'} />
                    <View className='flex flex-row justify-between w-1/2'>
                        <MovieInfo label="Original Language" value={movies?.original_language?.toUpperCase()} />
                        <MovieInfo label="Status" value={movies?.status} />
                    </View>
                    <MovieInfo label="Tagline" value={movies?.tagline} />
                </View>
            </ScrollView>

        </View>
    )
}

export default MovieDetails