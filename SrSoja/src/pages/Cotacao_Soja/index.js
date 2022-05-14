import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';
//icon
import SelectIcon from "../../assets/Icons/chevron-down"
import GraphicIcon from "../../assets/Icons/bar-chart-line-fill"

export default function Cotacao_Soja () { 
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
                            <View style={styles.bodyColumnDate}>
                                <Text style={styles.bodyDatePicker}>10/05/2022</Text>
                            </View>
                            <View style={styles.bodyColumnDate}>
                                <Text style={styles.bodyTitle}>Até</Text>
                            </View>
                            <View style={styles.bodyColumnDate}>
                                <Text style={styles.bodyDatePicker}>14/05/2022</Text>
                            </View>
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
