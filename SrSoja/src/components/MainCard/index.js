import React, { useContext } from "react";
import { StyleSheet, Text, View } from 'react-native'
import { Feather, Fontisto } from '@expo/vector-icons'

const MainCard = (props) => {

    const Icon = () => {
        if(props.icon === 'segunda'){
            return(
                <Feather style={styles.cardIcon} name="sun" size={15} color="white" />
            )   
        }
        if(props.icon === 'terça'){
            return(
                <Fontisto style={styles.cardIcon} name="day-cloudy" size={15} color="white" />
            )   
        }
        if(props.icon === 'quarta'){
            return(
                <Feather style={styles.cardIcon} name="sun" size={15} color="white" />
            )    
        }    
        if(props.icon === 'quinta'){
            return(
                <Fontisto style={styles.cardIcon} name="day-cloudy" size={15} color="white" />
            )  
        }
        if(props.icon === 'sexta'){
            return(
               <Feather style={styles.cardIcon} name="cloud-rain" size={15} color="white" />
            )   
        }     
    }

    return(
        <View style={[styles.card, {backgroundColor: props.backgroundColor}]}>
            <Text style={styles.cardHourText}>{props.title}</Text>
                <Icon></Icon>
            <Text style={styles.cardTemparatureText}>{props.temperature}</Text>
         </View>
    )
}

const styles = StyleSheet.create({   
    card:{    
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      margin: 1,
      width: 70,
      height: 120,
      
    },
    cardHourText:{
      color: 'white',
      margin: 11,
      fontSize: 11,
    },
    cardTemparatureText:{
      color: 'white',
      margin: 15,
      fontSize: 15,
    },
    cardIcon: {
      color: 'white',
      margin: 1
    },  
  });

export default MainCard;