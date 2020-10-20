import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TagResult = ({ tagData, tagSelected, setTagSelected }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setTagSelected([...tagSelected, tagData]);
      }}
    >
      <Text style={styles.textTitle}>{tagData.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF5350",
    borderRadius: 5,
    padding: 15,
    margin: 10,
    marginVertical: 7,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default TagResult;
