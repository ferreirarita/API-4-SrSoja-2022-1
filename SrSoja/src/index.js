import 'react-native-gesture-handler';
import React from "react";
import { StatusBar } from 'react-native';
import Pages from './pages';

export default function App () {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#F7BB26"/>
      <Pages />
    </>
  )
};