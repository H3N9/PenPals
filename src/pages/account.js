import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Navbar from "../components/navbar";
import Homebar from "../components/homebar";
import BoxProfile from "../components/newAccount/boxProfile";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);

const Account = ({ navigation }) => {
  return (
    <View style={MainStyle.mainBackground}>
      {/* <Homebar navigation={navigation} /> */}
      <ScrollView style={stylesCondition()}>
        <BoxProfile />
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
export default Account;
