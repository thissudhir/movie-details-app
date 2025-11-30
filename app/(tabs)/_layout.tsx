import { Ionicons } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';
import { Tabs } from 'expo-router';
import React from 'react';
const _Layout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "#AB8BFF",
            tabBarShowLabel: false,
            tabBarInactiveTintColor: "#fff",
            tabBarItemStyle: {
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            },
            tabBarStyle: {
                backgroundColor: "#141414",
                borderTopColor: "transparent",
                borderRadius: 50,
                height: 52,
                paddingBottom: 5,
                paddingTop: 5,
                position: "absolute",
                marginHorizontal: 10,
                marginBottom: 10,
                overflow: "hidden",
            },
        }}>
            <Tabs.Screen name="index" options={{
                title: "Home", headerShown: false, tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home-outline" size={size} color={color} />
                ),
            }} />
            <Tabs.Screen name="search" options={{
                title: "Search", headerShown: false, tabBarIcon: ({ color, size }) => (
                    <Ionicons name="search-outline" size={size} color={color} />
                ),
            }} />
            <Tabs.Screen name="saved" options={{
                title: "Bookmark", headerShown: false, tabBarIcon: ({ color, size }) => (
                    <Ionicons name="bookmark-outline" size={size} color={color} />
                ),
            }} />
            <Tabs.Screen name="profile" options={{
                title: "Profile", headerShown: false, tabBarIcon: ({ color, size }) => (
                    <Feather name="user" size={size} color={color} />
                ),
            }} />
        </Tabs>
    )
}

export default _Layout