import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import style from './styles'

import CheckIcon from '../../assets/Icons/check-circle'
import CancelIcon from '../../assets/Icons/x-circle'
import AddIcon from '../../assets/Icons/plus-circle'
import NextIcon from '../../assets/Icons/arrow-right-circle'

function CheckButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.buttonStyle}>
      <View style={{alignItems: 'center'}}>
        <CheckIcon 
          size={props.size} 
        />
      </View>
      { props.legend !== '' &&
      <Text style={style.textTiny}>
        {props.legend}
      </Text>
      }
    </TouchableOpacity>
  )
}

function CancelButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.buttonStyle}>
      <View style={{alignItems: 'center'}}>
        <CancelIcon 
          size={props.size} 
        />
      </View>
      { props.legend !== '' &&
      <Text style={style.textTiny}>
        {props.legend}
      </Text>
      }
    </TouchableOpacity>
  )
}

function AddButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.buttonStyle}>
      <View style={{alignItems: 'center'}}>
        <AddIcon 
          size={props.size} 
        />
      </View>
      { props.legend !== '' &&
      <Text style={style.textTiny}>
        {props.legend}
      </Text>
      }
    </TouchableOpacity>
  )
}

function NextButton(props) {
  return(
    <TouchableOpacity
    onPress={props.onPress}
    style={props.buttonStyle}
    disabled>
    <View style={{alignItems: 'center'}}>
      <NextIcon 
        size={props.size} 
      />
    </View>
    { props.legend !== '' &&
    <Text style={style.textTiny}>
      {props.legend}
    </Text>
    }
  </TouchableOpacity>
  )
}


export { CheckButton, CancelButton, AddButton, NextButton }