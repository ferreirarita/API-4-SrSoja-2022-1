import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import stylesVar from '../../styles/stylesVar'
import Drawer from '../Navigation'
//icons
import MenuIcon from '../../assets/Icons/list'
import BackIcon from '../../assets/Icons/chevron-left'


export default function CustomHeader () {
    const navigation = useNavigation();
        return (
            <View style={{flexDirection: 'row', height: 55, ...stylesVar.toolbar}}>
              <View style={{flex:1, justifyContent: 'center'}}>
                  <View style={{marginLeft:10}}>
                    <TouchableOpacity onPress={()=> navigation.openDrawer(Drawer)}>
                      <MenuIcon size="38" fill='#343434'/>
                    </TouchableOpacity>
                  </View>
              </View>
              <View style={{flex:1.5, justifyContent: 'center'}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold'}}>teste</Text>
              </View>
              <View style={{flex:1}}/>
            </View>
          );
    }
/*
import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import stylesVar from '../../styles/stylesVar'
//icons
import MenuIcon from '../../assets/Icons/list'
import BackIcon from '../../assets/Icons/chevron-left'


export default function CustomHeader () {
        let {navigation, isHome, title} = this.props
        return (
            <View style={{flexDirection: 'row', height: 55, ...stylesVar.toolbar}}>
              <View style={{flex:1, justifyContent: 'center'}}>
                {
                  isHome ?
                  <View style={{marginLeft:10}}>
                    <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                      <MenuIcon size="38" fill='#343434'/>
                    </TouchableOpacity>
                  </View>
                  :
                  <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.goBack()}>
                    <View style={{marginLeft:10}}>
                      <BackIcon size="33" fill='#343434'/>
                    </View>
                    <Text>Voltar</Text>
                  </TouchableOpacity>
                }
              </View>
              <View style={{flex:1.5, justifyContent: 'center'}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{title}</Text>
              </View>
              <View style={{flex:1}}/>
            </View>
          );
    }

*/