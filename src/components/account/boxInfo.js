import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MainStyle from "../../style/mainStyle";
import Tag from "./tag";

const BoxInfo = () => {
  const username = "Username";
  const address = "Antaya, Turky";
  const intro =
    "I love prime minister TU Lorem Ipsum is simply dummy text of the printing";
  const desc = "Lorem Ipsum is simply dummy text of the printing";
  const image = require("../../../assets/5.png");
  const tag = ["You", "And", "I"];

  const callTag = (value) => {
    return <Tag key={tag.indexOf(value)} tagName={value} />;
  };

  return (
    <View style={styles.main}>
      <View style={styles.userInfo}>
        <Image style={styles.imgProfile} source={image} />
        <View style={{ flex: 1 }}>
          <Text style={MainStyle.textBold}>{username}</Text>
          <Text style={MainStyle.textWhite}>{address}</Text>
          <Text style={MainStyle.textGray}>{desc}</Text>
          <TouchableOpacity style={styles.editProfile}>
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.boxIntro}>
        <Text style={MainStyle.textGray}>{intro}</Text>
      </View>
      <View style={styles.boxTag}>
        <Text style={styles.tagText}>Tag:</Text>
        {tag.map(callTag)}
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
  },
  userInfo: {
    flexDirection: "row",
    paddingHorizontal: 10,
    flex: 3,
  },
  editProfile: {
    backgroundColor: "#FF8850",
    marginVertical: 10,
    padding: 4,
    borderRadius: 3,
  },
  main: {
    flex: 1,
    flexDirection: "column",
  },
  boxTag: {
    flex: 1,
    flexDirection: "row",
  },
  boxIntro: {
    flex: 1,
    paddingHorizontal: 10,
    padding: 5,
  },
  tagText: {
    color: "#fff",
    marginHorizontal: 10,
  },
});
export default BoxInfo;
