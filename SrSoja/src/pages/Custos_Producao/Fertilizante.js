import React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import {LineChart} from "react-native-chart-kit";
import stylesVar from "../../styles/stylesVar";
import RNPickerDialog from 'rn-modal-picker';

class Fertilizante extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            custos: null,
            chartData: null,
            estados: null,
            dados: null,
            data: null
        };


        const getEstados = async () => {
            let response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
            let estados = await response.json();
            return estados.map(estado => {
                return {
                    id: estado.id,
                    name: estado.nome
                }
            });
        }

        const getData = async () => {
            let estados = await getEstados();
            let response = await fetch('https://sr-soja-flask-mock.herokuapp.com');
            let parsed = await response.json();
            let nacional = parsed[0].data.map(elemento => {
                return elemento +  (Math.random() * (20 - 10) + 10);
            });
            
            
            const labels = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", 'ago', 'set'];

            let data = {
                labels,
                datasets: [
                    {
                        data: nacional,
                        color: (opacity = 1) => 'red',
                        strokeWidth: 1.5
                    },
                    {
                        data: parsed[0].data,
                        color: (opacity = 1) => 'blue',
                        strokeWidth: 1.5
                    }
                ]
            };

            let custos = nacional.map((elemento, index) => {

                return {
                    data: `${index+1}/2021`,
                    estadual: parsed[0].data[index],
                    nacional: nacional[index].toFixed(2)
                }
            })
            setTimeout(() => {
                this.setState({
                    custos,
                    chartData: data,
                    estados,
                    dados: parsed
                });
            }, 1000);
        }  
        getData();     
    }



    render() {
        const getMunicipios = async (estado) => {
            let response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado.id}/municipios`);
            let municipios = await response.json();
            let municipiosMaped = municipios.map(municipio => {
                return {
                    id: municipio.id,
                    name: municipio.nome
                }
            });
            let chartData = this.state.chartData;

            let estadual = this.state.dados.find(elemento => elemento.id == estado.id).data;

            let nacional = estadual.map(elemento => {
                return elemento +  (Math.random() * (20 - 10) + 10);
            });
            chartData.datasets[0].data = nacional;
            chartData.datasets[1].data = estadual;
            this.setState({
                municipios: municipiosMaped,
                chartData,
                stateSelected: estado.name
            })
        }
        const chartConfig = {
            backgroundGradientFrom: "white",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#ffffff",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 0) => `rgba(0, 0, 1, ${opacity})`,
            strokeWidth: 2,
            barPercentage: 0.5,
            useShadowColorFromDataset: false
        };
        return (
            <>
                <View style={styles.body}>
                    <View style={{flexDirection: 'row'}}>
                    {this.state?.estados
                        ?
                        <RNPickerDialog
                            data={this.state.estados}
                            pickerTitle={''}
                            labelText={'Estado'}
                            showSearchBar={true}
                            showPickerTitle={true}
                            listTextStyle={styles.listTextStyle}
                            pickerStyle={styles.pickerStyle}
                            selectedText={this.state.selectedText}
                            placeHolderText={this.state?.stateSelected ?? 'Selecione'}
                            searchBarPlaceHolder={'Search...'}
                            searchBarPlaceHolderColor={'#9d9d9d'}
                            selectedTextStyle={styles.selectedTextStyle}
                            placeHolderTextColor={'gray'}
                            dropDownIconStyle={styles.dropDownIconStyle}
                            searchBarStyle={styles.searchBarStyle}
                            selectedValue={(index, item) => getMunicipios(item)}
                        /> :
                        <></>
                    }
                    {
                        this.state?.municipios
                            ?
                            <RNPickerDialog
                                data={this.state.municipios}
                                pickerTitle={''}
                                labelText={'Municipios'}
                                showSearchBar={true}
                                showPickerTitle={true}
                                listTextStyle={styles.listTextStyle}
                                pickerStyle={styles.pickerStyle}
                                selectedText={this.state.selectedText}
                                placeHolderText={this.state?.municipioSelected ?? 'Selecione'}
                                searchBarPlaceHolder={'Search...'}
                                searchBarPlaceHolderColor={'#000'}
                                selectedTextStyle={styles.selectedTextStyle}
                                placeHolderTextColor={'gray'}
                                dropDownIconStyle={styles.dropDownIconStyle}
                                searchBarStyle={styles.searchBarStyle}
                                selectedValue={(index, item) => { this.setState({ municipioSelected: item.name }) }}
                            />
                            :
                            <></>
                    }
                    </View>

                    {this.state.chartData ?
                        <LineChart
                            data={this.state?.chartData}
                            width={Dimensions.get('window').width}
                            height={200}
                            chartConfig={chartConfig}
                        /> :
                        <></>
                    }
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <View style={{ ...styles.headTitle }}>
                            <Text style={{ ...styles.title }}>Mês/Ano</Text>
                        </View>
                        <View style={{ ...styles.headTitle }}>
                            <Text style={{ ...styles.title }}>Estadual</Text>
                        </View>
                        <View style={{ ...styles.headTitle }}>
                            <Text style={{ ...styles.title }}>Nacional</Text>
                        </View>
                    </View>
                    {this.state?.custos?.map((custo, index) => {
                        return (
                            <View style={{ flexDirection: 'row' }} key={index}>
                                <View style={{ ...styles.headTitle }}>
                                    <Text styles={{ ...styles.textCenter }}>{custo.data}</Text>
                                </View>
                                <View style={{ ...styles.headTitle }}>
                                    <Text styles={{ ...styles.textCenter }}>{custo.estadual}</Text>
                                </View>
                                <View style={{ ...styles.headTitle }}>
                                    <Text styles={{ ...styles.textCenter }}>{custo.nacional}</Text>
                                </View>
                            </View>
                        )
                    })}
                </View></>
        )
    }
};

const styles = StyleSheet.create({
    textCenter: {
        justifyContent: 'center'
    },
    headTitle: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold'
    },
    body: {
        flex: 1,
        margin: 10,
        marginTop: 10,
        ...stylesVar.boxPrimary,
    },
    bodyRow: {
        flex: 0.1,
        flexDirection: "row",
        margin: 12,
        marginTop: 13,
        borderBottomWidth: 1,
    },
    bodyRowSelect: {
        flex: 1,
        marginTop: 4,
        flexDirection: "row",
        alignItems: "center",
    },
    bodyTitleSelect: {
        ...stylesVar.inputText,
    },
    bodyColumn: {
        flex: 0.4,
    },
    bodyTitle: {
        ...stylesVar.titleSecondary,
    },
    bodyRowDate: {
        flex: 0.1,
        flexDirection: "row",
        margin: 12,
        borderBottomWidth: 1,
        alignItems: "center",
    },
    bodyColumnDate: {
        paddingRight: 14,
    },
    bodyDatePicker: {
        ...stylesVar.inputText
    },
    bodyTable: {
        flex: 0.1,
        margin: 5,
        marginTop: 10,
    },
    bodyTableHeader: {
        justifyContent: "space-between",
        flex: 0.1,
        flexDirection: "row",
    },
    bodyTableTitle: {
        ...stylesVar.titleSecondary,
    },
    bodyTableRow: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
    },
    bodyTableColumn: {
        flex: 1,
    },
    bodyTableColumnGraphic: {
        flex: 0.2,
    },
    bodyTableRowText: {
        flex: 1,
        textAlign: "center",
        ...stylesVar.inputText,
    },
    listTextStyle: {
        color: '#000',
        marginVertical: 10,
        flex: 0.9,
        marginLeft: 20,
        marginHorizontal: 10,
        textAlign: 'left',
        fontSize: 12
    },
    pickerStyle: {
        borderWidth: 0,
        shadowOffset: {
            width: 0.5,
            height: 0.5,
        },
        height: 60,
        elevation: 0.5,
        width: 150,
        fontSize: 10,
        color: 'black'
    },
});
export default Fertilizante;
