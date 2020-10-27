import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";
import { AntDesignIcon } from "../style/themeComponent";
const Homebar = ({ navigation }) => {
  const theme = useSelector((state) => state.themeReducer.theme);
  return (
    <View style={styles.homebar}>
      <View style={styles.boxContent}>
        {theme.mode == "dark" ? (
          <Image
            source={require("../../assets/logo.png")}
            style={{ resizeMode: "cover", height: 30, width: 100 }}
          />
        ) : (
          <Image
            source={require("../../assets/logo-dark.png")}
            style={{ resizeMode: "cover", height: 30, width: 100 }}
          />
        )}
      </View>
      <View style={styles.boxContent}>
        <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
          <AntDesignIcon name="setting" size={26} color={"red"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homebar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    paddingHorizontal: 20,
  },
  boxContent: {
    backgroundColor: "transparent",
  },
  textButton: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 25,
  },
  badge: {
    backgroundColor: "red",
    width: 15,
    height: 17,
    position: "absolute",
    top: -5,
    right: -5,
    borderRadius: 50,
  },
});

export default Homebar;
