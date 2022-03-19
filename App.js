import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoadingScreen from './src/screens/Loading'
import {NavigationContainer} from '@react-navigation/native';
import CharactersScreen from './src/screens/Characters';
import {AppBottomBar} from './src/navigation'


export default function App() {
  const [Loading,setLoading] =useState(true)
  return (
    setTimeout(()=>{setLoading(false)},4000),
     Loading? (
      <LoadingScreen />
     ):
     (
       <NavigationContainer>
      <AppBottomBar />
      </NavigationContainer>
     )
  );
}