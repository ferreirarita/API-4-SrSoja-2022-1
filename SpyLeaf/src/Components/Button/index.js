import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import style from './styles'
import Check from '../../assets/check.js';

function CheckButton(props) {
  return (
    <TouchableOpacity
      
      onPress={props.onPress}>
      <View>
        <Check 
          fill={props.fill} 
          color={props.color} 
          size={props.size} 
        />
      </View>
    </TouchableOpacity>
  )
}

export default CheckButton;