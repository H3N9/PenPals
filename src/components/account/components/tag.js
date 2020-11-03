import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Tag = ({ tagName }) => {
  return (
    <TouchableOpacity style={styles.tagButton}>
      <LinearGradient
        colors={["#2A39AA", "#348AD9"]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.9, y: 0.5 }}
      >
        <Text style={styles.tagText}>{tagName}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  tagText: {
    fontSize: 12,
    color: "#FFF",
    textAlign: "center",
    fontWeight: "600",
  },
  tagButton: {
    borderRadius: 25,
  },
  gradient: {
    padding: 5,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginRight: 5,
  },
});
export default Tag;
