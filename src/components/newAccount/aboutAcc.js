import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MainStyle from "../../style/mainStyle";
import styled from "styled-components/native";
const AboutAcc = ({ describe }) => {
  return (
    <View style={styles.aboutMe}>
      <TextPrimary style={[MainStyle.textBold, { fontSize: 18 }]}>
        About Me
      </TextPrimary>
      <TextPrimary>{describe}</TextPrimary>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutMe: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

const TextPrimary = styled.Text`
  color: ${(props) => props.theme.textColor};
`;
export default AboutAcc;
