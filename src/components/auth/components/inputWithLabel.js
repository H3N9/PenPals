import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { TextPrimary } from "../../../style/themeComponent";
import MainStyle from "../../../style/mainStyle";

const InputWithLabel = ({ value, title, state, secure, valid }) => {
  const conditionStyle = () => {
    return valid ? { borderColor: "#FF5350", borderWidth: 2 } : { borderWidth: 0 };
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        secureTextEntry={secure}
        style={[styles.boxInput,  conditionStyle(), MainStyle.shadow]}
        onChangeText={(value) => state(value)}
        placeholder={title}
        clearButtonMode="always"
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
  },
  boxInput: {
    backgroundColor: "white",
    fontSize: 15,
    paddingLeft: 15,
    padding: 10,
    flex: 1,
    borderRadius: 6,
    borderWidth: 0
    
  },
});

export default InputWithLabel;
