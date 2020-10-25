import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MainStyle from "../../../style/mainStyle";
import { TextPrimary, SimpleLineIcon } from "../../../style/themeComponent";

const BoxInfo = ({ userDetail, navigation, auth }) => {
  const {
    username,
    gender,
    firstName,
    lastName,
    age,
    city,
    nation,
  } = userDetail;
  const image = require("../../../../assets/man.png");
  return (
    <View style={styles.main}>
      {!auth && (
        <TouchableOpacity
          style={{
            marginLeft: 15,
            width: 35,
            height: 35,
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.4);",
            borderRadius: 500,
          }}
          onPress={() => navigation.goBack()}
        >
          <SimpleLineIcon
            name="arrow-left"
            size={20}
            style={{
              paddingVertical: 3,
              textAlign: "center",
              color: "#fff",
            }}
          />
        </TouchableOpacity>
      )}
      <View style={styles.userInfo}>
        <View style={MainStyle.shadow}>
          <Image style={styles.imgProfile} source={image} />
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end", marginLeft: 20 }}>
          <TextPrimary style={MainStyle.textBold}>{username}</TextPrimary>
          <TextPrimary>
            {gender} {firstName} {lastName}, {age} y.e.
          </TextPrimary>
          <TextPrimary>
            {city} {nation}
          </TextPrimary>
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
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    paddingTop: 25,
  },
});

export default BoxInfo;
