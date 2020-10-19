import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TagResult = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textTitle}>Title</Text>
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
