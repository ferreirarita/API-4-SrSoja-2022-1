import React from 'react';
import { useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const MainCard = (props) => {

    const Icon = () => {
        if(props.icon === 'morning'){
          return(
            <Feather name="sun"  style={styles.cardIcon}size={40} color="white" />
          )
        }
        if(props.icon === 'afternoon'){
          return(
            <Fontisto name="day-cloudy" style={styles.cardIcon} size={40} color="white" />
          )
        }
        if(props.icon === 'night'){
          return(
            <Feather name="cloud-rain"  style={styles.cardIcon}size={40} color="white" />
          )
        }

    }
  
//minuto1:00:47

    const styles = StyleSheet.create({
      
      card:{
        backgroundColor: props.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin:10,
        width: 110,
        height:210,
      },
      
      refreshButton:{
      position:'absolute',
      margin:30,
      alignSelf:'flex-start',
      },

      text:{
        color:'white',
        margin:15,
        fontSize: 20,
      },
      
      cardIcon:{
        color:'white',
        margin:15,
        
      },
      /*temperatureText:{
        color:'white',
      }*/

      });
      

    return(
        <View style={styles.card}>
            <Text style={styles.text}>{props.title}</Text>
            <Icon> </Icon>
            <Text style={styles.text}>{props.temperature}</Text>

        </View>
    )

}

export default MainCard