import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// import Homebar from "../components/homebar";
import Navbar from "../components/navbar";
import Suggestion from "../components/search/suggestion";
import MainStyle from "../style/mainStyle";
import SearchBar from "../components/search/searchBar";
import { Dimensions } from "react-native";
import { PrimaryContainer } from "../style/themeComponent";

const screenWidth = Math.round(Dimensions.get("window").width);

const Search = ({ navigation }) => {
  return (
    <PrimaryContainer style={MainStyle.mainBackground}>
      <SearchBar />
      <ScrollView style={stylesCondition()}>
        <Suggestion userId={"1"} navigation={navigation} />
        <Suggestion userId={"2"} navigation={navigation} />
        <Suggestion userId={"3"} navigation={navigation} />
      </ScrollView>
      <Navbar navigation={navigation} />
    </PrimaryContainer>
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
