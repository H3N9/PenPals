import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const TagResult = ({ tagData, tagSelected, setTagSelected }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: tagData.isSelected ? "gray" : null,
      opacity: tagData.isSelected ? 0.5 : 1,
      borderRadius: 5,
      padding: 15,
      margin: 10,
      marginVertical: 7,
    },
    textTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#FFF"
    },
  });

  return (
    <LinearGradient
        colors={["#3059ab", "#31cdb0"]}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.9, y: 0.55 }}
        style={styles.container}
    >
      <TouchableOpacity
        // style={styles.container}
        onPress={() => {
          tagData.isSelected = !tagData.isSelected;
          setTagSelected([...tagSelected, tagData]);
        }}
        disabled={tagData.isSelected}
      >
        <Text style={styles.textTitle}>
          {tagData["category"] != undefined && tagData["category"]+" : "}
          {tagData.name}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default TagResult;
