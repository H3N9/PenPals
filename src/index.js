import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Account from "./pages/account";
import Home from "./pages/home";
import Messenger from "./pages/messenger";
import Search from "./pages/search";
import Notification from "./pages/notification";
import ChatRoom from "./pages/chatRoom";
import ViewProfile from "./pages/viewProfile";
import EditProfile from "./pages/editProfile";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  TransitionPresets,
  TransitionSpecs,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import styled, { ThemeProvider } from "styled-components/native";
import { useSelector } from "react-redux";
import { switchTheme } from "../redux/themeAction";
import { lightTheme, darkTheme } from "./style/Theme";
const Stack = createStackNavigator();

const Index = () => {
  const theme = useSelector((state) => state.themeReducer.theme);
  return (
    <ThemeProvider theme={theme}>
      {theme.mode == "dark" ? (
        <StatusBar style="light" />
      ) : (
        <StatusBar style="dark" />
      )}
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
              ...TransitionPresets.FadeFromBottomAndroid,
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Messenger" component={Messenger} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="ChatRoom" component={ChatRoom} />
            <Stack.Screen name="ViewProfile" component={ViewProfile} />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ThemeProvider>
  );
};

export default Index;
