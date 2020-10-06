import React from "react";
import {
  View,
  ScrollView,
} from "react-native";
import BoxProfile from "../components/newAccount/boxProfile";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);

const ViewProfile = ({ route }) => {
  const { id } = route.params;
  return (
    <View style={MainStyle.mainBackground}>
      {/* <Homebar navigation={navigation} /> */}
      <ScrollView style={stylesCondition()}>
        <BoxProfile id={ id }/>
      </ScrollView>
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
export default ViewProfile;