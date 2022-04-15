import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import estilos from './styles';
import { Button } from "react-native-paper";
import light from '../../styles/light';

const Tela_Inicial = (navigation) => {
    return (
        <View style={estilos.corpo}>

            <View style={estilos.bloco}>
                <Text style={estilos.titulo}>Utilidades</Text>
                <Text style={{left:60, fontSize:20, fontWeight:'bold', color: "#EE8600"}}>Cadastro do Talhão</Text>

                <TouchableOpacity
                    style={estilos.button3}>
                    <Text style={estilos.titulo_ico}>Cadastro</Text>
                </TouchableOpacity>
                <Text style={{left:60, fontSize:20, fontWeight:'bold', color: "#EE8600"}}>Cotações da Soja</Text>

                <TouchableOpacity
                    style={estilos.button3}>

        <Text style={{left:60, fontSize:20, fontWeight:'bold', color: "#EE8600"}}>Relatorio</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={estilos.button3}>

                    <Text style={estilos.titulo_ico}>Relatório</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={estilos.button3}>

                    <Text style={estilos.titulo_ico}>Custo de Produção</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={estilos.button3}>

                    <Text style={estilos.titulo_ico}>Preço da Saca</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={estilos.button3}>

                    <Text style={estilos.titulo_ico}>Tempo</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={estilos.button3}>

                    <Text style={estilos.titulo_ico}>Histórico de Vendas</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
export default Tela_Inicial