import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Navbar from "../components/navbar";
import Homebar from "../components/homebar";
import BoxProfile from '../components/account/boxProfile'

const Account = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#1a1a1a" }}>
      <Homebar navigation={navigation}/>
      <ScrollView style={{flex: 1, marginHorizontal: 10, marginTop: 5}}>
        <BoxProfile />
      </ScrollView>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default Account;
