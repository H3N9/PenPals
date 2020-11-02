import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import MainStyle from "../../style/mainStyle";
import Entypo from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
const ProfileHeader = ({ navigation, setNewDetail, newDetail }) => {
  const image = require("../../../assets/man.png");

  const saveEdit = () => {
    setNewDetail(newDetail);
    navigation.navigate("Account");
    console.log(newDetail);
  };
  return (
    <View style={styles.headerContainer}>
      <View style={styles.buttonSession}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icons name="chevron-left" color="#fff" size={21} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => saveEdit()} style={styles.backButton}>
          <AntDesign name="save" color="#fff" size={21} />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity>
          <Image style={styles.infoImgProfile} source={image} />
          <TouchableOpacity
            style={styles.changeProfileIcon}
            onPress={() => console.log("asd")}
          >
            <Entypo name="camera" size={21} color="#fff" />
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
  },
  buttonSession: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    backgroundColor: "rgba(0,0,0,0.7)",
    borderRadius: 50,
    padding: 5,
    borderColor: "#000",
    borderWidth: 0.6,
  },
  backButton: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: 39,
    height: 39,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileHeader;
