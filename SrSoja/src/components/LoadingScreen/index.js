import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import style from "./styles"

export default function LoadingScreen() {
    return (
        <View style={style.screen}>
            <ActivityIndicator size="large" color="#666" />
        </View>
    )
}