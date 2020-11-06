import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TagResult = ({ tagData, tagSelected, setTagSelected }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: tagData.isSelected ? "gray" : "#FF5350",
      opacity: tagData.isSelected ? 0.5 : 1,
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

  return (
    <TouchableOpacity
      style={styles.container}
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
  );
};

export default TagResult;
