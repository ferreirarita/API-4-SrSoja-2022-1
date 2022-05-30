<<<<<<< HEAD
import React, { useState } from 'react'
import { View, Text, TextInput, Dimensions } from 'react-native'
import styles from './styles'
import moment from 'moment'
import axios from 'axios'
=======
import {View} from 'react-native'
import getXMLResponse from '../../components/XMLResponse';
>>>>>>> 407b462a9afb888358f604023ff8f9dd4bc57647

const Previsao_Tempo = () => {
return(
    <>
    <View style={styles.container}>
        <View style={styles.body}>
            <Text style={styles.bodyTitle}>Pegar do XMLResponse </Text>

<Text style={styles.bodyTitle}>XMLResponse </Text>

<<<<<<< HEAD
    // const getApiData = async function() {
    //     return await axios.get("http://servicos.cptec.inpe.br/XML/capitais/condicoesAtuais.xml")
    // }

    return (
        <View style={styles.container}>

            <View style={{justifyContent: 'center'}}>
                <TextInput 
                    placeholder='Pesquise sua cidade'
                    value={cityName}
                    onChangeText={setCityName}
                    style={{textAlign: "center"}}
                />
            </View>

            <View>
                <Text style={{textAlign: "center"}}>
                    {moment().format("DD/MM/YYYY")}
                </Text>
            </View>

        </View>
    );
=======
            <View style={styles.bodyRow}>
                <View style={styles.bodyButton}>
                    <Text style={styles.bodyText}>Relatórios</Text>
                </View>
            </View>

<Text style={styles.bodyTitle}>XMLResponse </Text>

            <View style={styles.bodyRow}>
                <View style={styles.bodyButton}>
                    <Text style={styles.bodyText}>Cotação da Soja</Text>
                </View>
            </View>

            <Text style={styles.bodyTitle}>XMLResponse </Text>

                            <View style={styles.bodyRow}>
                <View style={styles.bodyButton}>
                    <Text style={styles.bodyText}>Cotação da Soja</Text>
                </View>
            </View>

            <Text style={styles.bodyTitle}>XMLResponse </Text>

                            <View style={styles.bodyRow}>
                <View style={styles.bodyButton}>
                    <Text style={styles.bodyText}>Cotação da Soja</Text>
                </View>
            </View>    
            
            <Text style={styles.bodyTitle}>XMLResponse </Text>

                        <View style={styles.bodyRow}>
                <View style={styles.bodyButton}>
                    <Text style={styles.bodyText}>Cotação da Soja</Text>
                </View>
            </View>

<Text style={styles.bodyTitle}>XMLResponse </Text>


                            <View style={styles.bodyRow}>
                <TouchableOpacity style={styles.bodyButton}>
                    <Text style={styles.bodyText}>Cotação da Soja</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bodyRowDesabled}>
                <View style={styles.bodyButtonDesabled}>
                    <Text style={styles.bodyTextDesabled}>Histórico de Compra e Venda</Text>
                </View>

                <View style={styles.bodyButtonDesabled}>

                    <Text style={styles.bodyTextDesabled}>Comparação da Região</Text>
                </View>
            </View>
        </View>
   </View>
   </>
);
>>>>>>> 407b462a9afb888358f604023ff8f9dd4bc57647
}
export default Previsao_Tempo