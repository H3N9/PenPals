import React from "react";
import { View, ScrollView } from "react-native";
import BoxProfile from "../components/newAccount/boxProfile";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";
import Navbar from "../components/navbar";
import { PrimaryContainer } from "../style/themeComponent";

const screenWidth = Math.round(Dimensions.get("window").width);

const ViewProfile = ({ route, navigation }) => {
  const { id } = route.params;
  return (
    <PrimaryContainer style={MainStyle.mainBackground}>
      <ScrollView style={stylesCondition()}>
        <BoxProfile id={id} navigation={navigation} />
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

export default ViewProfile;
