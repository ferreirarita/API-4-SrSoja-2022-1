import {View, Text, Image, Alert, ScrollView,TouchableOpacity } from 'react-native';
import styles from './styles';
import { parse } from 'fast-xml-parser';
import React, { useEffect, useState } from 'react';
import * as Location from "expo-location";
import { StyleSheet } from "react-native";
import { EvilIcons } from '@expo/vector-icons' 




const Previsao_Tempo = (props) => {

console.log('test',props.route.params?.clima)

let clima = props.route.params?.clima

  return (
    <View style={styles.container}>
      <View style={styles.body}>
      <Text style={styles.bodyTitle}>{clima.nome},{clima.estado}</Text>
      <Text style={styles.bodyTitle}> </Text>    
        <View style={styles.bodyRow}>
          <View style={styles.bodyButton}>
            <Text style={styles.bodyText}> IUV: {clima.previsao[0].dia}
              Máxima: {clima.previsao[0].dia} °C
              Mínima: {clima.previsao[0].dia} °C
            </Text>
            <Text style={styles.bodyText}> Tempo: {clima.previsao[0].dia}</Text>
          </View>
        </View>

       <Text style={styles.bodyTitle}>{clima.previsao[1].dia} </Text>
        <View style={styles.bodyRow}>
          <View style={styles.bodyButton}>
            <Text style={styles.bodyText}> IUV: {clima.previsao[1].iuv}
              Máxima: {clima.previsao[1].maxima} °C
              Mínima: {clima.previsao[1].minima} °C
            </Text>
            <Text style={styles.bodyText}> Tempo: {clima.previsao[1].tempo}</Text>
          </View>
        </View>



        <Text style={styles.bodyTitle}>{clima.previsao[2].dia} </Text>
        <View style={styles.bodyRow}>
          <View style={styles.bodyButton}>
            <Text style={styles.bodyText}> IUV: {clima.previsao[2].iuv}
              Máxima: {clima.previsao[2].maxima} °C
              Mínima: {clima.previsao[2].minima} °C
            </Text>
            <Text style={styles.bodyText}> Tempo: {clima.previsao[2].tempo}</Text>
          </View>
        </View>

        <Text style={styles.bodyTitle}>{clima.previsao[3].dia} </Text>
        <View style={styles.bodyRow}>
          <View style={styles.bodyButton}>
            <Text style={styles.bodyText}> IUV: {clima.previsao[3].iuv}
              Máxima: {clima.previsao[3].maxima} °C
              Mínima: {clima.previsao[3].minima} °C
            </Text>
            <Text style={styles.bodyText}> Tempo: {clima.previsao[3].tempo}</Text>
          </View>
        </View>


        <Text style={styles.bodyTitle}>{clima.previsao[4].dia} </Text>
        <View style={styles.bodyRow}>
          <View style={styles.bodyButton}>
            <Text style={styles.bodyText}> IUV: {clima.previsao[4].iuv}
              Máxima: {clima.previsao[4].maxima} °C
              Mínima: {clima.previsao[4].minima} °C
            </Text>
            <Text style={styles.bodyText}> Tempo: {clima.previsao[4].tempo}</Text>
          </View>
        </View>


        <Text style={styles.bodyTitle}>{clima.previsao[5].dia} </Text>
        <View style={styles.bodyRow}>
          <View style={styles.bodyButton}>
            <Text style={styles.bodyText}> IUV: {clima.previsao[5].iuv}
              Máxima: {clima.previsao[5].maxima} °C
              Mínima: {clima.previsao[5].minima} °C
            </Text>
            <Text style={styles.bodyText}> Tempo: {clima.previsao[5].tempo}</Text>
          </View>
        </View>
      </View >
    </View>
  )
}

export default Previsao_Tempo;
          
    
    
    /* AQUI TRANSFORMA AS ABREVIAÇÕES DO TEMPO

          for (x = 0; x = !5; x = x + 1) {
            if (clima.previsao[x].tempo == "ec")
              clima.previsao[x].tempo = "Encoberto com Chuvas Isoladas";
            if (clima.previsao[x].tempo == "ci")
              clima.previsao[x].tempo = "Chuvas Isoladas";
            if (clima.previsao[x].tempo == "c")
              clima.previsao[x].tempo = "Chuva";
            if (clima.previsao[x].tempo == "in")
              clima.previsao[x].tempo = "Instável";
            if (clima.previsao[x].tempo == "pp")
              clima.previsao[x].tempo = "Poss. de Pancadas de Chuva";
            if (clima.previsao[x].tempo == "cm")
              clima.previsao[x].tempo = "Chuva pela Manhã";
            if (clima.previsao[x].tempo == "cn")
              clima.previsao[x].tempo = "Chuva a Noite";
            if (clima.previsao[x].tempo == "pt")
              clima.previsao[x].tempo = "Pancadas de Chuva a Tarde";
            if (clima.previsao[x].tempo == "pm")
              clima.previsao[x].tempo = "Pancadas de Chuva pela Manhã";
            if (clima.previsao[x].tempo == "np")
              clima.previsao[x].tempo = "Nublado e Pancadas de Chuva";
            if (clima.previsao[x].tempo == "pc")
              clima.previsao[x].tempo = "Pancadas de Chuva";
            if (clima.previsao[x].tempo == "pn")
              clima.previsao[x].tempo = "Parcialmente Nublado";
            if (clima.previsao[x].tempo == "cv")
              clima.previsao[x].tempo = "Chuvisco";
            if (clima.previsao[x].tempo == "ch")
              clima.previsao[x].tempo = "Chuvoso";
            if (clima.previsao[x].tempo == "t")
              clima.previsao[x].tempo = "Tempestade";
            if (clima.previsao[x].tempo == "ps")
              clima.previsao[x].tempo = "Predomínio de Sol";
            if (clima.previsao[x].tempo == "e")
              clima.previsao[x].tempo = "Encoberto";
            if (clima.previsao[x].tempo == "n")
              clima.previsao[x].tempo = "Nublado";
            if (clima.previsao[x].tempo == "cl")
              clima.previsao[x].tempo = "Céu Claro";
            if (clima.previsao[x].tempo == "nv")
              clima.previsao[x].tempo = "Nevoeiro";
            if (clima.previsao[x].tempo == "g")
              clima.previsao[x].tempo = "Geada";
            if (clima.previsao[x].tempo == "ne")
              clima.previsao[x].tempo = "Neve";
            if (clima.previsao[x].tempo == "nd")
              clima.previsao[x].tempo = "Não Definido";
            if (clima.previsao[x].tempo == "pnt")
              clima.previsao[x].tempo = "Pancadas de Chuva a Noite";
            if (clima.previsao[x].tempo == "psc")
              clima.previsao[x].tempo = "Possibilidade de Chuva";
            if (clima.previsao[x].tempo == "pcm")
              clima.previsao[x].tempo = "Possibilidade de Chuva pela Manhã";
            if (clima.previsao[x].tempo == "pct")
              clima.previsao[x].tempo = "Possibilidade de Chuva a Tarde";
            if (clima.previsao[x].tempo == "pcn")
              clima.previsao[x].tempo = "Possibilidade de Chuva a Noite";
            if (clima.previsao[x].tempo == "npt")
              clima.previsao[x].tempo = "Nublado com Pancadas a Tarde";
            if (clima.previsao[x].tempo == "npn")
              clima.previsao[x].tempo = "Nublado com Pancadas a Noite";
            if (clima.previsao[x].tempo == "ncn")
              clima.previsao[x].tempo = "Nublado com Poss. de Chuva a Noite";
            if (clima.previsao[x].tempo == "nct")
              clima.previsao[x].tempo = "Nublado com Poss. de Chuva a Tarde";
            if (clima.previsao[x].tempo == "ncm")
              clima.previsao[x].tempo = "Nubl. c/ Poss. de Chuva pela Manhã";
            if (clima.previsao[x].tempo == "npm")
              clima.previsao[x].tempo = "Nublado com Pancadas pela Manhã";
            if (clima.previsao[x].tempo == "npp")
              clima.previsao[x].tempo = "Nublado com Possibilidade de Chuva";
            if (clima.previsao[x].tempo == "vn")
              clima.previsao[x].tempo = "Variação de Nebulosidade";
            if (clima.previsao[x].tempo == "ct")
              clima.previsao[x].tempo = "Chuva a Tarde";
            if (clima.previsao[x].tempo == "ppn")
              clima.previsao[x].tempo = "Poss. de Panc. de Chuva a Noite";
            if (clima.previsao[x].tempo == "ppt")
              clima.previsao[x].tempo = "Poss. de Panc. de Chuva a Tarde";
            if (clima.previsao[x].tempo == "ppm")
              clima.previsao[x].tempo = "Poss. de Panc. de Chuva pela Manhã";
          } 

           AQUI ERA PARA DESABILITA O LOADING




  O RETURN TA RODANDO ANTES DE DE useEffect
   OU seja TA DANDO erro em todos {clima.previsao[0].dia} etc..

  {loading ? (
    <View>
      <ActivityIndicator size="large" color={'red'} />
    </View>
  ) : ( 


              <Text style={styles.bodyTitle}> </Text>

                <Text style={styles.bodyTitle}>{clima.previsao[0].dia} </Text>
                <View style={styles.bodyRow}>
                  <View style={styles.bodyButton}>
                    <Text style={styles.bodyText}> IUV: {clima.previsao[0].iuv}
                       Máxima: {clima.previsao[0].maxima} °C 
                       Mínima: {clima.previsao[0].minima} °C 
                    </Text>
                    <Text style={styles.bodyText}> Tempo: {clima.previsao[0].tempo}</Text>
                  </View>
                </View>

                <Text style={styles.bodyTitle}>{clima.previsao[1].dia} </Text>
                <View style={styles.bodyRow}>
                  <View style={styles.bodyButton}>
                    <Text style={styles.bodyText}> IUV: {clima.previsao[1].iuv}
                       Máxima: {clima.previsao[1].maxima} °C 
                       Mínima: {clima.previsao[1].minima} °C 
                    </Text>
                    <Text style={styles.bodyText}> Tempo: {clima.previsao[1].tempo}</Text>
                  </View>
                </View>



                <Text style={styles.bodyTitle}>{clima.previsao[2].dia} </Text>
                <View style={styles.bodyRow}>
                  <View style={styles.bodyButton}>
                    <Text style={styles.bodyText}> IUV: {clima.previsao[2].iuv}
                       Máxima: {clima.previsao[2].maxima} °C 
                       Mínima: {clima.previsao[2].minima} °C 
                    </Text>
                    <Text style={styles.bodyText}> Tempo: {clima.previsao[2].tempo}</Text>
                  </View>
                </View>

                <Text style={styles.bodyTitle}>{clima.previsao[3].dia} </Text>
                <View style={styles.bodyRow}>
                  <View style={styles.bodyButton}>
                    <Text style={styles.bodyText}> IUV: {clima.previsao[3].iuv}
                       Máxima: {clima.previsao[3].maxima} °C 
                       Mínima: {clima.previsao[3].minima} °C 
                    </Text>
                    <Text style={styles.bodyText}> Tempo: {clima.previsao[3].tempo}</Text>
                  </View>
                </View>


                <Text style={styles.bodyTitle}>{clima.previsao[4].dia} </Text>
                <View style={styles.bodyRow}>
                  <View style={styles.bodyButton}>
                    <Text style={styles.bodyText}> IUV: {clima.previsao[4].iuv}
                       Máxima: {clima.previsao[4].maxima} °C 
                       Mínima: {clima.previsao[4].minima} °C 
                    </Text>
                    <Text style={styles.bodyText}> Tempo: {clima.previsao[4].tempo}</Text>
                  </View>
                </View>


                <Text style={styles.bodyTitle}>{clima.previsao[5].dia} </Text>
                <View style={styles.bodyRow}>
                  <View style={styles.bodyButton}>
                    <Text style={styles.bodyText}> IUV: {clima.previsao[5].iuv}
                       Máxima: {clima.previsao[5].maxima} °C 
                       Mínima: {clima.previsao[5].minima} °C 
                    <Text style={styles.bodyText}> Tempo: {clima.previsao[5].tempo}</Text>
                  </View>*/
