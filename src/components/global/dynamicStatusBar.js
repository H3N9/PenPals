import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Platform } from "react-native";

const DynamicStatusBar = ({ style }) => {
  return (
    <View
      style={[
        styles.statusBar,
        { backgroundColor: style == "light" ? "#1a1a1a" : "#d7d7d7" },
      ]}
    >
      <StatusBar
        style={style}
        backgroundColor={style == "light" ? "#1a1a1a" : "#d7d7d7"}
      ></StatusBar>
    </View>
  );
};

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
    marginBottom: Platform.OS === "ios" ? 0 : 20,
  },
});

export default DynamicStatusBar;
