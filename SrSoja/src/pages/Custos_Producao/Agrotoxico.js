import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import {
    LineChart
} from "react-native-chart-kit";

class Agrotoxico extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            custos: null,
            chartData: null
        };
        const data = {
            labels: ["2008", "2010", "2012", "2014", "2016", "2018","2020","2022"],
            datasets: [
                {
                    data: [
                        
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                    ],
                    color: (opacity = 1) => `red`,
                    strokeWidth: 2
                },
                {
                    data: [
                        
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                    ],
                    color: (opacity = 1) => `blue`,
                    strokeWidth: 2
                }
            ],
        };
        setTimeout(() => {
            this.setState({
                custos: [
                    {
                        data: '01/2021',
                        estadual: 'R$ 124,87',
                        nacional: 'R$ 130,25'
                    },
                    {
                        data: '02/2021',
                        estadual: 'R$ 120,42',
                        nacional: 'R$ 129,23'
                    }, ,
                    {
                        data: '03/2021',
                        estadual: 'R$ 124,99',
                        nacional: 'R$ 136,27'
                    },
                    {
                        data: '04/2021',
                        estadual: 'R$ 120,36',
                        nacional: 'R$ 120,10'
                    },
                    {
                        data: '05/2021',
                        estadual: 'R$ 127,89',
                        nacional: 'R$ 120,64'
                    }, ,
                    {
                        data: '06/2021',
                        estadual: 'R$ 120,35',
                        nacional: 'R$ 126,45'
                    },
                    {
                        data: '07/2021',
                        estadual: 'R$ 132,42',
                        nacional: 'R$ 120,36'
                    },
                    {
                        data: '08/2021',
                        estadual: 'R$ 190,24',
                        nacional: 'R$ 120,24'
                    }, ,
                    {
                        data: '09/2021',
                        estadual: 'R$ 120,34',
                        nacional: 'R$ 122,13'
                    },
                    {
                        data: '10/2021',
                        estadual: 'R$ 119,99',
                        nacional: 'R$ 120,12'
                    },
                    {
                        data: '11/2021',
                        estadual: 'R$ 129,13',
                        nacional: 'R$ 130,05'
                    },
                    {
                        data: '12/2021',
                        estadual: 'R$ 127,03',
                        nacional: 'R$ 120,75'
                    },
                    {
                        data: '01/2022',
                        estadual: 'R$ 127,03',
                        nacional: 'R$ 129,47'
                    },
                    {
                        data: '02/2022',
                        estadual: 'R$ 129,05',
                        nacional: 'R$ 123,35'
                    },
                    {
                        data: '03/2022',
                        estadual: 'R$ 125,02',
                        nacional: 'R$ 123,45'
                    },
                    {
                        data: '04/2022',
                        estadual: 'R$ 118,05',
                        nacional: 'R$ 123,47'
                    },
                    {
                        data: '05/2022',
                        estadual: 'R$ 123,05',
                        nacional: 'R$ 124,47'
                    },
                ],
                chartData: data
            });
        }, 1000);
    }

    render() {
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
            </>
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
    }
});
export default Agrotoxico;