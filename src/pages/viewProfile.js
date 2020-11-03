import React from "react";
import BoxProfile from "../components/account/boxProfile";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";
import { PrimaryContainer } from "../style/themeComponent";

const screenWidth = Math.round(Dimensions.get("window").width);

const ViewProfile = ({ route, navigation}) => {
  const { id, user } = route.params;
  return (
    <PrimaryContainer style={[MainStyle.mainBackground, { paddingTop: 0 }]}>
      <BoxProfile user={user} navigation={navigation} />
      {/* <ScrollView style={stylesCondition()}>
        <BoxProfile user={user} navigation={navigation} />
      </ScrollView> */}
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
