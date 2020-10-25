import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import {
  SecondContainer,
  SimpleLineIcon,
  TextPrimary,
} from "../../style/themeComponent";

const FriendListHeader = ({ navigation }) => {
  return (
    <SecondContainer style={styles.headerContainer}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SimpleLineIcon name={"arrow-left"} size={20} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <TextPrimary
          style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
        >
          Friend
        </TextPrimary>
      </View>

      <View style={{ flex: 1 }}></View>
    </SecondContainer>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingVertical: 15,
  },
});
export default FriendListHeader;
