import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import style from './styles'

import Check from '../../assets/check'
import X from '../../assets/x'
import Plus from '../../assets/plus'

function CheckButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.buttonStyle}
      disabled='true'>
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

function XButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.buttonStyle}
      disabled>
      <View style={{alignItems: 'center'}}>
        <X 
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

function AddButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.buttonStyle}
      disabled>
      <View style={{alignItems: 'center'}}>
        <Plus 
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


export { CheckButton, XButton, AddButton }