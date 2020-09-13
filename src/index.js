import React from 'react'
import {StyleSheet, View} from 'react-native'
import Account from './pages/account'
import Home from './pages/home'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const Index = () =>{
    return (
      
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Account" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Account" component={Account} />
          </Stack.Navigator>
      </NavigationContainer>
      
    )
}

export default Index