import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'
import styles from './styles';
//icon
import SelectIcon from "../../assets/Icons/chevron-down"
import GraphicIcon from "../../assets/Icons/bar-chart-line-fill"

export default function Cotacao_Soja () { 
    const [state, setState] = useState({ date: new Date(), mode: 'date', show: false })
    const [text, setText] = useState('Selecione')
    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || state.date
        setState({...state, date: currentDate, show: false})
        //console.log(selectedDate)
        let tempDate = selectedDate
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
        setText(fDate)
    }
    const firstDate = (currentMode) => {
        setState({...state, show: true})
      }

    const [secondState, setSecondState] = useState({ date: new Date(), mode: 'date', show: false })
    const [secondText, setSecondText] = useState('Selecione')
      
    const onChangeSecond = (event, selectedDate) => {
        const currentDate = selectedDate || secondState.date
        setSecondState({...secondState, date: currentDate, show: false})
        //console.log(selectedDate)
        let tempDate = selectedDate
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
        setSecondText(fDate)
    }
      const secondDate = (currentMode) => {
        setSecondState({...secondState, show: true})
      }
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text style={styles.headerTitle}>Cotações da Soja</Text>
                    <View style={styles.body}>
                        <View style={styles.bodyRow}>
                            <View style={styles.bodyColumn}>
                                <Text style={styles.bodyTitle}>Estado</Text>
                                <TouchableOpacity style={styles.bodyRowSelect}>
                                <Text style={styles.bodyTitleSelect}>Selecione</Text>
                                <SelectIcon size={20} fill="#343434" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.bodyColumn}>
                                <Text style={styles.bodyTitle}>Município</Text>
                                <TouchableOpacity style={styles.bodyRowSelect}>
                                    <Text style={styles.bodyTitleSelect}>Selecione</Text>
                                    <SelectIcon size={20} fill="#343434" />
                                </TouchableOpacity>
                            </View>            
                        </View>

                        <View style={styles.bodyRowDate}>
                            <View style={styles.bodyColumnDate}>
                                <Text style={styles.bodyTitle}>Data</Text>
                            </View>
                            <TouchableOpacity style={styles.bodyColumnDate} onPress={firstDate} title="Data de Início" >
                                { state.show && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        timeZoneOffsetInMinutes={0}
                                        value={state.date}
                                        mode={state.mode}
                                        is24Hour={true}
                                        display="default"
                                        onChange={onChange}
                                        />)
                                }
                                <Text style={styles.bodyTitleSelect}>{text}</Text>
                            </TouchableOpacity>

                            <View style={styles.bodyColumnDate}>
                                <Text style={styles.bodyTitle}>Até</Text>
                            </View>

                            <TouchableOpacity style={styles.bodyColumnDate} onPress={secondDate} title="Data Final" >  
                                { secondState.show && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        timeZoneOffsetInMinutes={0}
                                        value={secondState.date}
                                        mode={secondState.mode}
                                        is24Hour={true}
                                        display="default"
                                        onChange={onChangeSecond}
                                        />)
                                }
                                <Text style={styles.bodyTitleSelect}>{secondText}</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.bodyTable}>
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
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
