import 'react-native-gesture-handler';
import React, {useEffect, useState} from "react";
import { StatusBar } from 'react-native';
import Routes from './routes';
import { LogBox } from 'react-native';

import openDatabase from './services/database/config';
import {Context} from './context';


export default function App () {
  LogBox.ignoreLogs(["FloatingLabel"])
  useEffect(()=>{
    //openDatabase()//.then(response => setDatabase(response))
  },[])

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#F7BB26"/>
      <Context>
        <Routes />
      </Context>
    </>
  )
};