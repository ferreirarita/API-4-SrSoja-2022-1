import 'react-native-gesture-handler';
import React, {useEffect, useState} from "react";
import { StatusBar } from 'react-native';
import Routes from './routes';

import openDatabase from './services/database/config';
import {Context} from './context';


export default function App () {
  const [database,setDatabase] = useState(null)
  const [dataResult,setResult] = useState(null)

  useEffect(()=>{
    openDatabase().then(response => setDatabase(response))
  },[])

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#F7BB26"/>
      {/*
      <Context.Provider value={{database, dataResult, setResult}}>
        <Pages />
      </Context.Provider>
      */}
      <Context>
        <Routes />
      </Context>
    </>
  )
};