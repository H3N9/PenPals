import React from "react";
import { View, ScrollView } from "react-native";
import MainEdit from "../components/editProfile/mainEdit";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);

const EditProfile = ({ route, navigation }) => {
  return (
    <View style={MainStyle.mainBackground}>
      <ScrollView style={stylesCondition()}>
        <MainEdit />
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
export default EditProfile;