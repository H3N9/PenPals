import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Navbar from "../components/navbar";
import BoxProfile from "../components/newAccount/boxProfile";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Header from "../components/addTag/header";
import TagResult from "../components/addTag/tagResult";
import SelectedTag from "../components/addTag/selectedTag";

const screenWidth = Math.round(Dimensions.get("window").width);

const AddTag = ({ navigation }) => {
  return (
    <Container style={MainStyle.mainBackground}>
      <View style={stylesCondition()}>
        <Header />
        <SelectedTag />
        <TagResult />
      </View>
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
export default AddTag;
