import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import {
  SecondContainer,
  SimpleLineIcon,
  TextPrimary,
  FontAwesomeIcon,
  PrimaryContainer
} from "../../style/themeComponent";

const FriendListHeader = ({ navigation }) => {
  return (
    <PrimaryContainer style={styles.headerContainer}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon name="chevron-left" size={22} />
        </TouchableOpacity>
      </View>
    </PrimaryContainer>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,

  },
});
export default FriendListHeader;
