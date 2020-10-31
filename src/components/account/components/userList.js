import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { TextPrimary } from "../../../style/themeComponent";

const userList = ({ friendCount, intro, navigation }) => {
  return (
    <View style={styles.infoContainer}>
      <TouchableOpacity
        style={styles.infoItems}
        onPress={() => navigation.navigate("FriendList")}
      >
        <TextPrimary
          style={{ textAlign: "center", fontSize: 25, fontWeight: "700" }}
        >
          {friendCount}
        </TextPrimary>
        <TextPrimary style={{ textAlign: "center" }}>Friend</TextPrimary>
      </TouchableOpacity>
      <View style={[styles.infoItems, { flex: 2, paddingLeft: 10 }]}>
        <TextPrimary>{intro}</TextPrimary>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    marginBottom: 25,
    flexDirection: "row",
  },
  infoImgProfile: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  infoItems: {
    marginHorizontal: 5,
    flex: 1,
  },
});

export default userList;
