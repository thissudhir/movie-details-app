import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const MovieCard = ({ id, poster_path, title, vote_average, vote_count, release_date }: MovieProps) => {
    const storeData = async (id: string) => {
        try {
            const jsonValue = JSON.stringify(id);
            await AsyncStorage.setItem('my-key', jsonValue);
        } catch (e) {
            console.error('Error storing data', e);
            throw e;
        }
    };

    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className='w-[30%]'>
                <Image
                    source={{
                        uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : `https://placehold.co/600x400/1a1a1a/ffffff.png`
                    }}
                    className='w-full h-52 rounded-lg'
                    resizeMode='cover'
                />
                <Text className='text-white font-semibold mt-2 text-sm' numberOfLines={1}>{title}</Text>
                <Text className='text-gray-400 text-sm'>{release_date}</Text>
                <View className='flex-row items-center mt-1'>
                    <Ionicons name="star" size={14} color={"#facc15"} />
                    <Text className='text-yellow-400 text-sm ml-1'>{vote_average} ({vote_count})</Text>
                </View>
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard