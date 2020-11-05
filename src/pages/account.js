import React from "react";
import { SafeAreaView } from "react-native";
import BoxProfile from "../components/account/boxProfile";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";
import { PrimaryContainer } from "../style/themeComponent";

const screenWidth = Math.round(Dimensions.get("window").width);

const Account = ({ route, navigation }) => {
  const user = route.params.user
  return (
    <PrimaryContainer style={[MainStyle.mainBackground, { paddingTop: 0 }]}>
      <SafeAreaView style={{ flex: 1 }}>
        <BoxProfile user={user} navigation={navigation} />
      </SafeAreaView>
    </PrimaryContainer>
  );
};

const stylesCondition = () => {
  if (screenWidth >= 768) {
    return { flex: 1 };
  } else {
    return { flex: 1 };
  }
};

export default Account;
