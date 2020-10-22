import React from "react";
import { View, StyleSheet } from "react-native";
import MainStyle from "../../../style/mainStyle";
import { TextPrimary } from "../../../style/themeComponent";
const AboutAcc = ({ describe }) => {
  return (
    <View style={styles.aboutMe}>
      <TextPrimary style={[MainStyle.textBold, { fontSize: 20 }]}>
        About Me
      </TextPrimary>
      <TextPrimary>{describe}</TextPrimary>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutMe: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
});

export default AboutAcc;
