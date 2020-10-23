import React from "react";
import { View, ScrollView } from "react-native";
import MainEdit from "../components/editProfile/mainEdit";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";
import { PrimaryContainer } from "../style/themeComponent";

import FriendListHeader from "../components/friendList/friendListHeader";
import FriendListContent from "../components/friendList/friendListContent";

const screenWidth = Math.round(Dimensions.get("window").width);

const FriendList = ({ route, navigation }) => {
  return (
    <PrimaryContainer style={[MainStyle.mainBackground, { paddingTop: 0 }]}>
      <FriendListHeader navigation={navigation} />
      <FriendListContent navigation={navigation} />
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

export default FriendList;
