import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Navbar from "../components/navbar";
import Homebar from "../components/homebar";
import BoxProfile from '../components/account/boxProfile'

const Notification = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#1a1a1a" }}>
      <Homebar />
      <ScrollView style={{flex: 1, marginHorizontal: 10, marginTop: 5}}>

      </ScrollView>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default Notification;
