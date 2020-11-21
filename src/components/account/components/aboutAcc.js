import React from "react";
import { View, StyleSheet } from "react-native";
import MainStyle from "../../../style/mainStyle";
import { TextPrimary } from "../../../style/themeComponent";
const AboutAcc = ({ describe }) => {
  return (
    <View style={styles.aboutMe}>
      <TextPrimary style={{ fontSize: 20, fontWeight: "700" }}>
        About Me
      </TextPrimary>
      <TextPrimary style={{paddingHorizontal: 10, padding: 3}}>{describe}</TextPrimary>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutMe: {
    marginVertical: 20,
    paddingHorizontal: 15,
  },
});

export default AboutAcc;
