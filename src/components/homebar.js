import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const Homebar = () => {
  return (
    <View style={styles.homebar}>
      <View style={styles.boxContent}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ resizeMode: "cover", height: 30, width: 100 }}
        />
      </View>
      <View style={styles.boxContent}>
        <TouchableOpacity>
          <Text style={styles.textButton}>S</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homebar: {
    margin: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    paddingVertical: 10,
    marginHorizontal: 20
  },
  boxContent: {
    backgroundColor: "transparent",
  },
  textButton: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 25,
  },
});

export default Homebar;
