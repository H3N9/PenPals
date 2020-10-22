import React from "react"
import { View } from "react-native"
import Account from "./pages/account"
import Home from "./pages/home"
import Messenger from "./pages/messenger"
import Search from "./pages/search"
import Notification from "./pages/notification"
import ChatRoom from "./pages/chatRoom"
import ViewProfile from "./pages/viewProfile"
import EditProfile from "./pages/editProfile"
import AddTag from "./pages/addTag"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import {TransitionPresets} from "@react-navigation/stack"
import Login from './components/auth/login'
import { ThemeProvider } from "styled-components/native"
import { useSelector } from "react-redux"
import DynamicStatusBar from "./components/global/dynamicStatusBar"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


const StackNavigation = () => {
  return(
    <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home"
            screenOptions={{
              headerShown: false,
              animationEnabled: false,
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Messenger" component={Messenger} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ChatRoom" component={ChatRoom}
              options={{
                ...TransitionPresets.ModalSlideFromBottomIOS,
                animationEnabled: true,
              }}
            />
            <Stack.Screen name="ViewProfile" component={ViewProfile}
              options={{
                ...TransitionPresets.ModalSlideFromBottomIOS,
                animationEnabled: true,
              }}
            />
            <Stack.Screen name="AddTag" component={AddTag}
              options={{
                ...TransitionPresets.ModalSlideFromBottomIOS,
                animationEnabled: true,
              }}
            />
            <Stack.Screen name="EditProfile" component={EditProfile}
              options={{
                ...TransitionPresets.ModalSlideFromBottomIOS,
                animationEnabled: true,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
  )
}

const TabNavigation = () =>{
  return(
    <View style={{ flex: 1 }}>
        <NavigationContainer>
            <Tab.Screen />
        </NavigationContainer>
    </View>
  )
}

const Index = () => {
  const theme = useSelector((state) => state.themeReducer.theme);

  const statusDynamic = (mode) =>{
    return mode === "dark"?  <DynamicStatusBar style="light" />:<DynamicStatusBar style="dark" />
  }
  return (
    <ThemeProvider theme={theme}>
      {statusDynamic(theme.mode)}
      <StackNavigation />
    </ThemeProvider>
  );
};

export default Index;
