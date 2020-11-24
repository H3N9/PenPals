import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Platform, SafeAreaView } from "react-native";

const DynamicStatusBar = ({ style }) => {
  return (
    <SafeAreaView
      style={[
        styles.statusBar,
        { backgroundColor: style == "light" ? "#212121" : "#FFF" },
      ]}
    >
      <StatusBar
        style={style}
        backgroundColor={style == "light" ? "#212121" : "#FFF"}
      ></StatusBar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: 20,
  },
});

export default DynamicStatusBar;
