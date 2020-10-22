import React from "react";
import { ScrollView } from "react-native";
import BoxProfile from "../components/account/boxProfile";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";
import { PrimaryContainer } from "../style/themeComponent";

const screenWidth = Math.round(Dimensions.get("window").width);

const Account = ({ route, navigation }) => {
  const id = route.params.id
  console.log(route.params, "acc")
  return (
    <PrimaryContainer style={[MainStyle.mainBackground, { paddingTop: 0 }]}>
      <ScrollView style={stylesCondition()}>
        <BoxProfile id={id} navigation={navigation} />
      </ScrollView>
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

export default Account;
