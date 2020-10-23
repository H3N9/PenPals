import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import MainStyle from "../../style/mainStyle";
import Entypo from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/SimpleLineIcons";

const ProfileHeader = ({ navigation }) => {
  const image = require("../../../assets/man.png");
  return (
    <View style={styles.headerContainer}>
      <View style={styles.buttonSession}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.goBack()}
        >
          <Icons name="arrow-left" color="#fff" size={20} />
          <Text style={MainStyle.textWhiteBold}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("MyAccount")}>
          <Text style={MainStyle.textWhiteBold}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity>
          <Image style={styles.infoImgProfile} source={image} />
          <TouchableOpacity
            style={styles.changeProfileIcon}
            onPress={() => console.log("asd")}
          >
            <Entypo name="camera" size={22} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#FF5350",
    flex: 1,
    padding: 20,
    paddingLeft: 15,
    paddingTop: 25,
  },
  buttonSession: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoImgProfile: {
    width: 100,
    height: 100,
    backgroundColor: "#555",
    borderRadius: 100,
  },
  changeProfileIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#FFF",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 50,
    borderColor: "#000",
    borderWidth: 2,
  },
});

export default ProfileHeader;
