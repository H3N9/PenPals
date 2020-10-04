import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import MainStyle from "../../style/mainStyle";
import ImagPro from "./imgPro";

const userList = ({ user }) => {
  const friendCount = user.friend.length;
  const intro = user.intro;

  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoItems}>
        <Text
          style={[
            MainStyle.textWhiteBold,
            { textAlign: "center", fontSize: 25 },
          ]}
        >
          {friendCount}
        </Text>
        <Text style={[MainStyle.textWhite, { textAlign: "center" }]}>
          Friend
        </Text>
      </View>
      <View style={[styles.infoItems, { flex: 2, paddingLeft: 10 }]}>
        <Text style={MainStyle.textWhite}>{intro}</Text>
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
    backgroundColor: "#CCC",
    borderRadius: 100,
  },
  infoItems: {
    marginHorizontal: 5,
    flex: 1,
  },
});

export default userList;
