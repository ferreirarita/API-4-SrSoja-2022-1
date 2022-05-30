import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import SelectIcon from "../../assets/Icons/chevron-down"
import Semente from './Semente';




const Sementes = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Semente />
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('Home')}>
                        <Text>Visualizar</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
        </SafeAreaView>
    );
}

const Fertilizantes = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Tela de Fertilizantes</Text>
                <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('Home')}>
                    <Text>Visualizar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
const Agrotoxicos = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Tela de Agrotóxicos</Text>
                <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('Cadastros')}>
                    <Text>Visualizar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export { Sementes, Fertilizantes, Agrotoxicos }