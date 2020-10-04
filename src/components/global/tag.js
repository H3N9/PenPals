import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Tag = ({ tagName, id }) => {
    const tag = tagName
    return (
        <TouchableOpacity><Text style={styles.tagText}>{tag}</Text></TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  tagText: {
    fontSize: 12,
  },
  tagButton: {
    marginRight: 10,
    marginTop: 2,
    padding: 2,
    backgroundColor: "#FF5350",
    borderRadius: 5,
  },
});
export default Tag;
