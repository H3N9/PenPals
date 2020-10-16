import React from "react";
import { StyleSheet, Dimensions, View, Text, ScrollView } from "react-native";

const height = Math.round(Dimensions.get("window").height);
const width = Math.round(Dimensions.get("window").width);

const Content = () => {
  return (
    <ScrollView>
      <View style={styles.boxMain}>
        <View style={styles.blockTop}></View>
        <View style={styles.boxContent}>
          <Text>4</Text>
        </View>
        <View style={styles.boxContent}>
          <Text>4</Text>
        </View>
        <View style={styles.boxContent}>
          <Text>4</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxMain: {
    flex: 1,
    flexDirection: "column",
  },
  boxContent: {
    marginBottom: width * 0.05,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    backgroundColor: "#FFF",
    borderRadius: 10,
    height: height / 2.5,
    width: width * 0.9,
  },
  blockTop: {
    marginBottom: width * 0.05,
    backgroundColor: "white",
  },
});

export default Content;
