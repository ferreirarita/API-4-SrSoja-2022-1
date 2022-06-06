import React from 'react'
import { ScrollView,Text, View, TouchableOpacity} from 'react-native'
import MiniMap from '../../components/MiniMap'
import {useNavigation} from '@react-navigation/native'
import styles from './styles'
//Icons
import CadastrosIcon    from '../../assets/Icons/map-fill'
import RelatoriosIcon   from '../../assets/Icons/clipboard-data-fill'
import CotacaoIcon      from '../../assets/Icons/currency-exchange'
import CustosIcon       from '../../assets/Icons/cart4'
import PrevisaoIcon     from '../../assets/Icons/cloud-lightning-rain-fill'
import HistoricoIcon    from '../../assets/Icons/clock-history'
import GraphicIcon   from '../../assets/Icons/trophy-fill'


const Tela_Inicial = () => {
    const navigation = useNavigation();
    return (
        <>
                <ScrollView>

            <View style={styles.header}>
                <View style={styles.headerColumn}>
                    <View style={styles.headerWeather}>
                            <PrevisaoIcon size="29" fill='#E9E9E9' />
                            <Text style={styles.headerWeatherText}>18ºC</Text>
                            <Text style={styles.headerWeatherText}>Hoje</Text>
                    </View>
                </View>
                <View style={styles.headerColumn}>
                    <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('Previsao_Tempo')}>
                        <View style={styles.headerButton}>
                            <PrevisaoIcon size="29" fill='#343434' />
                            <Text style={styles.headerText}>Previsão do Tempo</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.bodyTitle}>Utilidades</Text>

                <View style={styles.bodyRow}>
                    <TouchableOpacity style={styles.bodyButton} onPress={() => navigation.navigate('Cadastro_Fazenda_Talhao')}>
                        <CadastrosIcon size="40" fill='#343434' />
                        <Text style={styles.bodyText}>Cadastros</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bodyButton} onPress={() => navigation.navigate('Relatorios_Produtividade')}>
                        <RelatoriosIcon size="40" fill='#343434'/>
                        <Text style={styles.bodyText}>Relatórios de Produtividade</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bodyRow}>
                    <TouchableOpacity style={styles.bodyButton} onPress={() => navigation.navigate('Cotacao_Soja')}>
                        <CotacaoIcon size="40" fill='#343434'/>
                        <Text style={styles.bodyText}>Cotação da Soja</Text>
                    </TouchableOpacity>
            
                    <TouchableOpacity style={styles.bodyButton} onPress={() => navigation.navigate('Custos_Producao')}>
                        <CustosIcon size="42" fill='#343434'/>
                        <Text style={styles.bodyText}>Custos de Produção</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bodyRow}>
                    <TouchableOpacity style={styles.bodyButton} onPress={() => navigation.navigate('Historico_Compra_Venda')}>
                        <HistoricoIcon size="40" fill='#343434'/>
                        <Text style={styles.bodyText}>Histórico de Compra e Venda</Text>
                    </TouchableOpacity>
                </View>

                


                        {/*        <View style={styles.bodyTable}>
                            <View style={styles.bodyTableHeader}>
                                <Text style={styles.bodyTableTitle}>Preço por 60Kg</Text>
                                <Text style={styles.bodyTableTitle}>Local</Text>
                                <Text style={styles.bodyTableTitle}>Data</Text>
                                <Text style={styles.bodyTableTitle}>Gráfico</Text>
                            </View>
                            <View style={styles.bodyTableRow}>
                                <View style={styles.bodyTableColumn}>
                                    <Text style={styles.bodyTableRowText}>132,50 $</Text>
                                </View>
                                <View style={styles.bodyTableColumn}>
                                    <Text style={styles.bodyTableRowText}>Araxá</Text>
                                </View>
                                <View style={styles.bodyTableColumn}>
                                    <Text style={styles.bodyTableRowText}>15/02/2022</Text>
                                </View>
                                <View style={styles.bodyTableColumnGraphic}>
                                    <GraphicIcon size={22} fill="#343434" />
                                </View>
                            </View>
                            <View style={styles.bodyTableRow}>
                                <View style={styles.bodyTableColumn}>
                                    <Text style={styles.bodyTableRowText}>132,50 $</Text>
                                </View>
                                <View style={styles.bodyTableColumn}>
                                    <Text style={styles.bodyTableRowText}>Araxá</Text>
                                </View>
                                <View style={styles.bodyTableColumn}>
                                    <Text style={styles.bodyTableRowText}>15/02/2022</Text>
                                </View>
                                <View style={styles.bodyTableColumnGraphic}>
                                    <GraphicIcon size={22} fill="#343434" />
                                </View>
                            </View>
                            <View style={styles.bodyTableRow}>
                                <View style={styles.bodyTableColumn}>
                                    <Text style={styles.bodyTableRowText}>132,50 $</Text>
                                </View>
                                <View style={styles.bodyTableColumn}>
                                    <Text style={styles.bodyTableRowText}>Araxá</Text>
                                </View>
                                <View style={styles.bodyTableColumn}>
                                    <Text style={styles.bodyTableRowText}>15/02/2022</Text>
                                </View>
                                <View style={styles.bodyTableColumnGraphic}>
                                    <GraphicIcon size={22} fill="#343434" />
                                </View>
                            </View>
                            <View style={styles.bodyTableRow}>
                                <View style={styles.bodyTableColumn}>
                                    <Text style={styles.bodyTableRowText}>132,50 $</Text>
                                </View>
                                <View style={styles.bodyTableColumn}>
                                    <Text style={styles.bodyTableRowText}>Araxá</Text>
                                </View>
                                <View style={styles.bodyTableColumn}>
                                    <Text style={styles.bodyTableRowText}>15/02/2022</Text>
                                </View>
                                <View style={styles.bodyTableColumnGraphic}>
                                    <GraphicIcon size={22} fill="#343434" />
                                </View>
                            </View>
                            <View style={styles.bodyTableRow}>
                                <View style={styles.bodyTableColumn}>
                                    <Text style={styles.bodyTableRowText}>132,50 $</Text>
                                </View>
                                <View style={styles.bodyTableColumn}>
                                    <Text style={styles.bodyTableRowText}>Araxá</Text>
                                </View>
                                <View style={styles.bodyTableColumn}>
                                    <Text style={styles.bodyTableRowText}>15/02/2022</Text>
                                </View>
                                <View style={styles.bodyTableColumnGraphic}>
                                    <GraphicIcon size={22} fill="#343434" />
                                </View>
                            </View>
                            
                        </View>
                    
      
                </View> */}

        </View>


        </View>
       </ScrollView>
       </>
    );
}
export default Tela_Inicial