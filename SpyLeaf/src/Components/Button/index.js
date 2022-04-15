import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import style from './styles'
import Check from '../../assets/check.js';

function CheckButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.buttonStyle}
      >
      <View style={{alignItems: 'center'}}>
        <Check 
          fill={props.fill} 
          color={props.color} 
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

export default CheckButton;