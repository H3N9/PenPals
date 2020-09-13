import React from 'react'
import Index from './src/index'
import {StatusBar, Text} from 'react-native'

export default function App() {
  return (
    <React.Fragment>
      <StatusBar backgroundColor='transparent' barStyle='light-content' translucent={true} />
      <Index />
    </React.Fragment>      
  )
}
