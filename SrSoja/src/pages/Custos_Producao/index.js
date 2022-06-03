import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import SelectIcon from "../../assets/Icons/chevron-down"
import Semente from './Semente';
import Fertilizante from './Fertilizante';
import Agrotoxico from './Agrotoxico';




const Sementes = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Semente />
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('Home')}>
                        <Text>HOME</Text>
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
            <ScrollView>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Fertilizante />
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('Home')}>
                        <Text>HOME</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const Agrotoxicos = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Agrotoxico />
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('Cadastros')}>
                        <Text>HOME</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export { Sementes, Fertilizantes, Agrotoxicos }