import { View,Text,Image } from 'react-native';
import getXMLResponse from '../../components/XMLResponse';
import styles from '../Home/styles';
import { parse } from 'fast-xml-parser';




   

    const [tempo,settempo] = useState({})
    const lat = -22.90;
    const log = -47.06;
        useEffect (() => {

            fetch(`http://servicos.cptec.inpe.br/XML/cidade/7dias/${lat}/${log}/previsaoLatLon.xml`)

            .then((response) => response.text())

            .then((textResponse) => {

                let obj = parse(textResponse);
                let cidade = obj.cidade.nome;
                let previsao = [...obj.cidade.previsao]
                settempo({nome: cidade,previsao: previsao});
            })

            .catch((error) => {

                console.log(error);

            });
    },[]);


const Previsao_Tempo = () => {

    console.log("Sera?");
    console.log(tempo);
    console.log("AEW");
    return (
        
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.bodyTitle}>"Pegar do XMLResponse"</Text>

                    <View style={styles.bodyRow}>
                        <View style={styles.bodyButton}>
                            <Text style={styles.bodyText}>ºC</Text>
                        </View>
                    </View>

                    <Text style={styles.bodyTitle}>XMLResponse </Text>

                    <View style={styles.bodyRow}>
                        <View style={styles.bodyButton}>
                            <Text style={styles.bodyText}>ºC</Text>
                        </View>
                    </View>

                    <Text style={styles.bodyTitle}>XMLResponse </Text>

                    <View style={styles.bodyRow}>
                        <View style={styles.bodyButton}>
                            <Text style={styles.bodyText}>ºC</Text>
                        </View>
                    </View>

                    <Text style={styles.bodyTitle}>XMLResponse </Text>

                    <View style={styles.bodyRow}>
                        <View style={styles.bodyButton}>
                            <Text style={styles.bodyText}>ºC</Text>
                        </View>
                    </View>

                    <Text style={styles.bodyTitle}>XMLResponse </Text>

                    <View style={styles.bodyRow}>
                        <View style={styles.bodyButton}>
                            <Text style={styles.bodyText}>ºC</Text>
                        </View>
                    </View>

                    <Text style={styles.bodyTitle}>XMLResponse </Text>


                    <View style={styles.bodyRow}>
                        <View style={styles.bodyButton}>
                            <Text style={styles.bodyText}>ºC</Text>
                        </View>
                    </View>
                </View>
            </View>
        
    );
}
export default Previsao_Tempo;