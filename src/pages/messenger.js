import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Homebar from "../components/homebar";
import Navbar from "../components/navbar";

const Messenger = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#1a1a1a" }}>
      <Homebar />
      <ScrollView style={{flex: 1}}>

      </ScrollView>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default Messenger;
