import React from "react";
import { View, ScrollView, KeyboardAvoidingView } from "react-native";
import MainEdit from "../components/editProfile/mainEdit";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";
import { PrimaryContainer } from "../style/themeComponent";

const screenWidth = Math.round(Dimensions.get("window").width);

const EditProfile = ({ route, navigation }) => {
  const user = route.params.user
  return (
    <PrimaryContainer style={[MainStyle.mainBackground, { paddingTop: 0 }]}>
      <KeyboardAvoidingView
      style={{flex: 1}}
			  behavior={Platform.OS == "ios" ? "padding" : "height"}
			  keyboardVerticalOffset={Platform.OS == "ios" ? 60 : 0}
			>
      <ScrollView style={stylesCondition()}>
        <MainEdit user={user} navigation={navigation} />
      </ScrollView>
      </KeyboardAvoidingView>
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

export default EditProfile;
