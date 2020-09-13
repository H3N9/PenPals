import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Navbar from "../components/navbar";
import Homebar from "../components/homebar";
import Content from "../components/content";
import { LinearGradient } from "expo-linear-gradient";

const Home = ({ navigation }) => {
  return (
    <LinearGradient colors={["#132031", "#022b6b"]} style={{ flex: 1 }}>
      <Homebar />
      <ScrollView style={{flex: 1}}>
        <Content />
      </ScrollView>
      <Navbar navigation={navigation} />
    </LinearGradient>
  );
};

export default Home;
