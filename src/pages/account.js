import React from "react";
import { View, Text, ScrollView } from "react-native";
import Navbar from "../components/navbar";
import Homebar from "../components/homebar";
import { LinearGradient } from "expo-linear-gradient";

const Account = ({ navigation }) => {
  return (
    <LinearGradient colors={["#132031", "#022b6b"]} style={{ flex: 1 }}>
      <Homebar />
      <ScrollView style={{flex: 1}}>
        <Text>Hellow</Text>
      </ScrollView>
      <Navbar navigation={navigation} />
    </LinearGradient>
  );
};

export default Account;
