import React from "react";
import { View, StyleSheet } from "react-native";
import { TextPrimary } from "../../../style/themeComponent";

const userList = ({ friendCount, intro }) => {

  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoItems}>
        <TextPrimary style={{ textAlign: "center", fontSize: 25 }}>
          {friendCount}
        </TextPrimary>
        <TextPrimary style={{ textAlign: "center" }}>Friend</TextPrimary>
      </View>
      <View style={[styles.infoItems, { flex: 2, paddingLeft: 10 }]}>
        <TextPrimary>{intro}</TextPrimary>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    marginVertical: 25,
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
