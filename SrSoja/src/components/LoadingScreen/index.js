import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import styles from "./styles"

export default function LoadingScreen() {
    return (
        <View style={styles.screen}>
            <ActivityIndicator size="large" color="#666" />
        </View>
    )
}