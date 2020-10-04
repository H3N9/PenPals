import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Homebar from "../components/homebar";
import Navbar from "../components/navbar";
import Suggestion from "../components/search/suggestion";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);

const Search = ({ navigation }) => {
  return (
    <View style={MainStyle.mainBackground}>
      <Homebar navigation={navigation} />
      <ScrollView style={stylesCondition()}>
        <Suggestion userId={"1"}/>
        <Suggestion userId={"2"}/>
        <Suggestion userId={"3"}/>
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
export default Search;
