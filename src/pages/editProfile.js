import React from "react";
import { View, ScrollView } from "react-native";
import MainEdit from "../components/editProfile/mainEdit";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const screenWidth = Math.round(Dimensions.get("window").width);

const EditProfile = ({ route, navigation }) => {
  return (
    <Container style={MainStyle.mainBackground}>
      <ScrollView style={stylesCondition()}>
        <MainEdit navigation={navigation} />
      </ScrollView>
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
export default EditProfile;
