import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity,fetch } from 'react-native'
import styles from './styles'
import { parse } from 'fast-xml-parser';


export default function Previsao_Tempo () {
    return (

        getXMLResponse = () => {

            fetch('https://gist.githubusercontent.com/Pavneet-Sing/d0f3324f2cd3244a6ac8ffc5e8550102/raw/8ebc801b3e4d4987590958978ae58d3f931193a3/XMLResponse.xml')

            .then((response) => response.text())

            .then((textResponse) => {

                let obj = parse(textResponse);

            })  

            .catch((error) => {

                console.log(error);

            });

        }


    );
}