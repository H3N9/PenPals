import React from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import Home from "./src/pages/home";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <React.Fragment>
      <StatusBar barStyle = "light-content"/>
      <LinearGradient colors={["#132031", "#022b6b"]} style={{ flex: 1 }}>
        <Home />
      </LinearGradient>
    </React.Fragment>
  );
}
