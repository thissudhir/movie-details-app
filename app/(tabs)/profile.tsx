import { images } from '@/constants/images'
import { Feather } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Image, RefreshControl, ScrollView, Text, View } from 'react-native'

const Profile = () => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

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
                }
            >
                <Image source={images.appLogo} className="w-20 h-16 mt-20 mb-5 mx-auto" />
                <View className='flex justify-center items-center flex-1 flex-col gap-5 ' >
                    <Feather name="user" size={44} color={"#ffffff"} />
                    <Text className='text-white text-base'>Profile</Text>
                </View>
            </ScrollView >
        </View >
    )
}

export default Profile