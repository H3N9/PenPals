import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Homebar from "../components/homebar";
import Navbar from "../components/navbar";
import Chat from "../components/messenger/chat"
import MainStyle from '../style/mainStyle'

const Messenger = ({ navigation }) => {
  return (
    <View style={MainStyle.mainBackground}>
      <Homebar navigation={navigation} />
      <ScrollView style={{flex: 1}}>
        <Chat />
      </ScrollView>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default Messenger;
