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
import styled from "styled-components/native";
const screenWidth = Math.round(Dimensions.get("window").width);

const Search = ({ navigation }) => {
  return (
    <Container style={MainStyle.mainBackground}>
      <SearchBar />
      <ScrollView style={stylesCondition()}>
        <Suggestion userId={"1"} navigation={navigation} />
        <Suggestion userId={"2"} navigation={navigation} />
        <Suggestion userId={"3"} navigation={navigation} />
      </ScrollView>
      <Navbar navigation={navigation} />
    </Container>
  );
};

const stylesCondition = () => {
  if (screenWidth >= 768) {
    return { flex: 1, marginHorizontal: "20%" };
  } else {
    return { flex: 1 };
  }
};

const Container = styled.View`
  background-color: ${(props) => props.theme.primaryBackground};
`;

export default Search;
