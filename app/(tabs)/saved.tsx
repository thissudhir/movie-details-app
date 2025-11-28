import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'

const Bookmark = () => {
    return (
        <View className='bg-primary flex-1 px-10'>
            <View className='flex justify-center items-center flex-1 flex-col gap-5 ' >
                <Ionicons name="bookmark" size={44} color={"#ffffff"} />
                <Text className='text-white text-base'>Bookmark</Text>
            </View>
        </View>
    )
}

export default Bookmark