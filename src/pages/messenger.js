import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Homebar from "../components/homebar";
import Navbar from "../components/navbar";
import Chat from "../components/messenger/chat"
const Messenger = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#1a1a1a" }}>
      <Homebar navigation={navigation} />
      <ScrollView style={{flex: 1}}>
        <Chat />
      </ScrollView>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default Messenger;
