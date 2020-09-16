import React from 'react'
import {StyleSheet, View} from 'react-native'
import Account from './pages/account'
import Home from './pages/home'
import Messenger from './pages/messenger'
import Search from './pages/search'
import Notification from './pages/notification'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const Index = () =>{
    return (
      
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Messenger" component={Messenger} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Notification" component={Notification} />
          </Stack.Navigator>
      </NavigationContainer>
      
    )
}

export default Index