import React, { useEffect, useState } from 'react';
import { parse } from 'fast-xml-parser';


const getXMLResponse = () => {

    const lat = 22.90;
    const log = 47.06;
    const [tempo, settempo] = useState({})

    useEffect(() => {

        fetch(`http://servicos.cptec.inpe.br/XML/cidade/7dias/${lat}/${log}/previsaoLatLon.xml`)

            .then((response) => response.text())

            .then((textResponse) => {

                let obj = parse(textResponse);
                let cidade = obj.cidade.nome;
                let previsao = [...obj.cidade.previsao]
                settempo({ nome: cidade, previsao: previsao });
            })

            .catch((error) => {

                console.log(error);

            });
    }, []);
}
export default getXMLResponse;