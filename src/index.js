import React from "react";
import { View } from "react-native";
import Account from "./pages/account";
import Home from "./pages/home";
import Messenger from "./pages/messenger";
import Search from "./pages/search";
import Notification from "./pages/notification";
import ChatRoom from "./pages/chatRoom";
import ViewProfile from "./pages/viewProfile";
import EditProfile from "./pages/editProfile";
import AddTag from "./pages/addTag";
import FriendList from "./pages/friendList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

import { ThemeProvider } from "styled-components/native";
import { useSelector } from "react-redux";

import DynamicStatusBar from "./components/global/dynamicStatusBar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FlatList } from "react-native-gesture-handler";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  const theme = useSelector((state) => state.themeReducer.theme);
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#ff5350",
        showLabel: false,
        style: {
          backgroundColor: theme.mode == "dark" ? "#323232" : "#FFF",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (tabInfo) => {
            return <AntDesign name="home" size={26} color={tabInfo.color} />;
          },
        }}
      />
      <Tab.Screen
        name="Messenger"
        component={Messenger}
        options={{
          tabBarIcon: (tabInfo) => {
            return <Entypo name="chat" size={26} color={tabInfo.color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: (tabInfo) => {
            return <AntDesign name="search1" size={26} color={tabInfo.color} />;
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="ios-notifications"
                size={26}
                color={tabInfo.color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: (tabInfo) => {
            return <AntDesign name="user" size={26} color={tabInfo.color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Index = () => {
  const theme = useSelector((state) => state.themeReducer.theme);
  return (
    <ThemeProvider theme={theme}>
      {theme.mode == "dark" ? (
        <DynamicStatusBar style="light" />
      ) : (
        <DynamicStatusBar style="dark" />
      )}

      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeTab"
              component={HomeTab}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatRoom"
              component={ChatRoom}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewProfile"
              component={ViewProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddTag"
              component={AddTag}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FriendList"
              component={FriendList}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ThemeProvider>
  );
};

export default Index;
