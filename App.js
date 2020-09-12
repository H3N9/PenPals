import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet } from 'react-native'
import Index from './src/index'
import {LinearGradient} from 'expo-linear-gradient'

export default function App() {
  return (
    <LinearGradient colors={["#132031", "#022b6b"]} style={{ flex: 1 }}>
      <Index />
    </LinearGradient>       
  );
}
