import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Tag = ({ tagName }) => {
  return (
    <TouchableOpacity style={styles.tagButton}>
      <Text style={styles.tagText}>{tagName}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  tagText: {
    fontSize: 12,
  },
  tagButton: {
    marginRight: 10,
    marginTop: 2,
    padding: 3,
    paddingHorizontal: 8,
    backgroundColor: "#FF5350",
    borderRadius: 25,
  },
});
export default Tag;
