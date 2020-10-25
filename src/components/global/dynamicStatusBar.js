import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Platform } from "react-native";

const DynamicStatusBar = ({ style }) => {
  return (
    <View
      style={[
        styles.statusBar,
        { backgroundColor: style == "light" ? "#1a1a1a" : "#FFF" },
      ]}
    >
      <StatusBar
        style={style}
        backgroundColor={style == "light" ? "#1a1a1a" : "#FFF"}
      ></StatusBar>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: 20,
  },
});

export default DynamicStatusBar;
