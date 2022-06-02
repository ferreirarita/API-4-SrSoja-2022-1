import React, { Component } from 'react'
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
//Icons
import LogoutIcon   from '../../assets/Icons/box-arrow-right'
import Settings     from '../../assets/Icons/gear'

import getContext from '../../hooks'
import { useNavigation } from '@react-navigation/native'

const CustomDrawer = (props) => {
    const { logOut } = getContext()
    const navigation = useNavigation()
    return(
        <SafeAreaView style={{flex:1,backgroundColor: '#F7BB26'}}>
        <DrawerContentScrollView {...props}>
            <View style={{flex:1,backgroundColor: '#F7BB26', paddingTop:5}}>
                <View style={{flexDirection: 'row', marginTop:-5, marginRight:8,alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../../assets/Logotype/SrSoja_Body.png')} style={{height:56, width:50}} />
                    <Image source={require('../../assets/Logotype/SrSoja_Name.png')} style={{height:55, width:68}} />
                </View>
            <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
        
        <View style ={{padding: 10, paddingLeft: 18, borderTopWidth:1, borderTopColor:'#CCCCC'}}>
            <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Settings size={24} fill='#343434' />
                    <Text style={{fontSize:16, fontWeight: 'bold', marginLeft:8}}>Configurações</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>{logOut().finally(()=>{navigation.navigate('App_Open')})}} style={{paddingVertical:15}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <LogoutIcon size={24} fill='#343434' />
                    <Text style={{fontSize:16, fontWeight: 'bold', marginLeft:8}}>Sair</Text>
                </View>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}
export default CustomDrawer