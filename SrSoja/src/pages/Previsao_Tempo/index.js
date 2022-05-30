import {View} from 'react-native'

import { parse } from 'fast-xml-parser';
import React,{ useEffect, useState } from 'react';


const getXMLResponse = () => {
const [tempo,settempo] = useState({})

    useEffect (() => {

        fetch('http://servicos.cptec.inpe.br/XML/cidade/7dias/-22.90/-47.06/previsaoLatLon.xml')

        .then((response) => response.text())

        .then((textResponse) => {

            let obj = parse(textResponse);
            let cidade = obj.cidade.nome;
            let previsao = [...obj.cidade.previsao]
            settempo({cidade,previsao});
        })

        .catch((error) => {

            console.log(error);

        });
    },[]);

    console.log (tempo);

    return (<View>
        
        </View>
        );
}
export default getXMLResponse;