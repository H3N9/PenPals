import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Homebar from "../components/homebar";
import Navbar from "../components/navbar";
import Chat from "../components/messenger/chat";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);

const Messenger = ({ navigation }) => {
  return (
    <View style={MainStyle.mainBackground}>
      <Homebar navigation={navigation} />
      <ScrollView style={stylesCondition()}>
        <Chat />
      </ScrollView>
      <Navbar navigation={navigation} />
    </View>
  );
};

const stylesCondition = () => {
  if (screenWidth >= 768) {
    return { flex: 1, marginHorizontal: "20%" };
  } else {
    return { flex: 1 };
  }
};
export default Messenger;
