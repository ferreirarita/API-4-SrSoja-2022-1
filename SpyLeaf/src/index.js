import React from 'react';
import { StatusBar } from 'react-native';
import Paginas from './pages';

export default function App () {
  return (<>
    <Paginas />
    <StatusBar barStyle="light-content" backgroundColor="#FFFFFF"/>
  </>
  )};