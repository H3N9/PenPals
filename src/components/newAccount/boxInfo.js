import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MainStyle from "../../style/mainStyle";
import styled from "styled-components/native";
const BoxInfo = ({ user }) => {
  const { username, gender, firstName, lastName, age, city, nation } = user;
  const image = require("../../../assets/man.png");
  return (
    <View style={styles.main}>
      <View style={styles.userInfo}>
        <Image style={styles.imgProfile} source={image} />
        <View style={{ flex: 1, justifyContent: "flex-end", marginLeft: 20 }}>
          <TextPrimary style={MainStyle.textBold}>{username}</TextPrimary>
          <TextPrimary>
            {gender} {firstName} {lastName}, {age} y.e.
          </TextPrimary>
          <TextPrimary>
            {city} {nation}
          </TextPrimary>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgProfile: {
    width: 90,
    height: 90,
    backgroundColor: "#CCC",
    borderRadius: 100,
    marginRight: 10,
    bottom: -25,
    borderColor: "#1a1a1a",
    borderWidth: 2,
  },
  userInfo: {
    flexDirection: "row",
    paddingHorizontal: 10,
    flex: 3,
    paddingBottom: 10,
  },
  main: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FF5350",
    paddingTop: 25,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
});

const TextPrimary = styled.Text`
  color: ${(props) => props.theme.textColor};
`;
export default BoxInfo;
