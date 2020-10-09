import React from "react";
import { StyleSheet, View } from "react-native";
import Account from "./pages/account";
import Home from "./pages/home";
import Messenger from "./pages/messenger";
import Search from "./pages/search";
import Notification from "./pages/notification";
import ChatRoom from "./pages/chatRoom";
import ViewProfile from "./pages/viewProfile";
import EditProfile from "./pages/editProfile";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  TransitionPresets,
  TransitionSpecs,
  CardStyleInterpolators,
} from "@react-navigation/stack";
const Stack = createStackNavigator();

const Index = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#323232" }}>
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
  );
};

export default Index;
