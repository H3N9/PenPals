import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Navbar from "../components/navbar";
import Homebar from "../components/homebar";
import BoxProfile from "../components/account/boxProfile";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";
import MainEdit from "../components/editProfile/mainEdit";
const screenWidth = Math.round(Dimensions.get("window").width);

const Notification = ({ navigation }) => {
  const [Darkmode, setDarkmode] = useState(true);
  return (
    <View style={MainStyle.mainBackground}>
      {/* <Homebar navigation={navigation} /> */}
      <ScrollView style={stylesCondition()}>
        {/* <Text style={{ textAlign: "center", fontSize: 30, color: "#fff" }}>
          Notification Page
        </Text> */}
        <MainEdit />
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
export default Notification;
