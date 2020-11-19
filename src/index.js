import React, { useEffect } from "react";
import { View } from "react-native";
import MyAccount from "./pages/myAccount";
import Account from "./pages/account";
import Home from "./pages/home";
import Messenger from "./pages/messenger";
import Search from "./pages/search";
import Notification from "./pages/notification";
import ChatRoom from "./pages/chatRoom";
import EditProfile from "./pages/editProfile";
import AddTag from "./pages/addTag";
import FriendList from "./pages/friendList";
import Setting from "./pages/setting";
import SubSearch from './pages/subSearch'
import CreateTag from './pages/createTag'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";
import Login from '../src/pages/login'
import { AntDesign, Entypo, Ionicons, FontAwesome } from "@expo/vector-icons";

import { ThemeProvider } from "styled-components/native";
import { useSelector } from "react-redux";
import { PrimaryContainer } from "../src/style/themeComponent";
import DynamicStatusBar from "./components/global/dynamicStatusBar";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Register from './pages/register'



const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTab = () => {
  const theme = useSelector((state) => state.themeReducer.theme);
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: theme.mode == "dark" ? "#323232" : "#FFF" }}
      labeled={false}
      inactiveColor={"#999"}
      tabBarOptions={{
        swipeEnabled: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (tabInfo) => {
            return <Entypo name="home" size={26}  color={tabInfo.color} />;
          },
        }}
      />
      <Tab.Screen
        name="Messenger"
        component={Messenger}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="ios-chatbubbles"
                size={26}
                color={tabInfo.color}
              />
            );
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
        name="MyAccount"
        component={MyAccount}
        options={{
          tabBarIcon: (tabInfo) => {
            return <FontAwesome name="user" size={26} color={tabInfo.color} />;
          },
        }}
      />
      {/* <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: (tabInfo) => {
            return <AntDesign name="user" size={26} color={tabInfo.color} />;
          },
        }}
      /> */}
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

      <PrimaryContainer style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
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
            //   name="ViewProfile"
            //   component={ViewProfile}
            //   options={{
            //     headerShown: false,
            //     gestureEnabled: true,
            //   }}
            // />
            // <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{
                cardOverlayEnabled: true,
                headerShown: false,
                ...TransitionPresets.ModalSlideFromBottomIOS,
              }}
            />
            <Stack.Screen
              name="AddTag"
              component={AddTag}
              options={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS,
              }}
            />
            <Stack.Screen
              name="FriendList"
              component={FriendList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Setting"
              component={Setting}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="Account"
              component={Account}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SubSearch"
              component={SubSearch}
              options = {({ route }) => ({ title: route.params.name }), {headerShown: false}}
            />
            <Stack.Screen
              name="CreateTag"
              component={CreateTag}
              options = {{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PrimaryContainer>
    </ThemeProvider>
  );
};

export default Index;
