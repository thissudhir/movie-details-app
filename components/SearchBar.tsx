import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, View } from 'react-native';

interface SearchBarProps {
    placeholder: string;
    onPress?: () => void;
    value?: string;
    onChangeText?: (text: string) => void;
}

const SearchBar = ({ placeholder, onPress, value, onChangeText }: SearchBarProps) => {
    return (
        <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
            <Ionicons name="search" size={19} color={"#ab8bff"} />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={"#a8b5db"}
                value={value}
                onPress={onPress}
                onChangeText={onChangeText}
                className='flex-1 ml-2 text-white'
            />
        </View>
    )
}

export default SearchBar