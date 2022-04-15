import React from "react";
import { StatusBar } from 'react-native';
import Pages from './pages';

export default function App () {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#222222"/>
      <Pages />
    </>
  )
};
