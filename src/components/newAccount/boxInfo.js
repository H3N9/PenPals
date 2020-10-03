import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MainStyle from "../../style/mainStyle";

const BoxInfo = ({ user }) => {
  const {username, gender, firstName, lastName, age, city, nation} = user
  const image = require("../../../assets/5.png")
  return (
      <View style={styles.main}>
        <View style={styles.userInfo}>
          <Image style={styles.imgProfile} source={image} />
          <View style={{ flex: 1, justifyContent: "flex-end", marginLeft: 20 }}>
            <Text style={MainStyle.textBold}>{username}</Text>
            <Text style={MainStyle.textWhite}>
              {gender} {firstName} {lastName}, {age} y.e.
            </Text>
            <Text style={MainStyle.textWhite}>{city} {nation}</Text>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  imgProfile: {
    width: 90,
    height: 90,
    backgroundColor: "#CCC",
    borderRadius: 100,
    marginRight: 10,
    bottom: -25,
    borderColor: "#1a1a1a",
    borderWidth: 2,
  },
  userInfo: {
    flexDirection: "row",
    paddingHorizontal: 10,
    flex: 3,
    paddingBottom: 10,
  },
  main: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FF5350",
    paddingTop: 25,
  },
});
export default BoxInfo;
