import React from "react";
import { View, ScrollView, Switch } from "react-native";
import Navbar from "../components/navbar";
import Homebar from "../components/homebar";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";

import styled from "styled-components/native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { switchTheme } from "../../redux/themeAction";
import { lightTheme, darkTheme } from "../style/Theme";

const screenWidth = Math.round(Dimensions.get("window").width);

const Notification = ({ navigation }) => {
  const theme = useSelector((state) => state.themeReducer.theme);
  const dispatch = useDispatch();

  const darkModeHandle = () => {
    if (theme.mode == "light") {
      dispatch(switchTheme(darkTheme));
    } else {
      dispatch(switchTheme(lightTheme));
    }
  };

  return (
    <Container style={MainStyle.mainBackground}>
      <Homebar navigation={navigation} />
      <ScrollView style={stylesCondition()}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TextPrimary style={{ fontWeight: "bold" }}>Darkmode</TextPrimary>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={theme.mode == "light" ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => darkModeHandle()}
            value={theme.mode == "light" ? false : true}
          />
        </View>
      </ScrollView>
      <Navbar navigation={navigation} />
    </Container>
  );
};

const stylesCondition = () => {
  if (screenWidth >= 768) {
    return { flex: 1, marginHorizontal: "20%" };
  } else {
    return { flex: 1 };
  }
};

const Container = styled.View`
  background-color: ${(props) => props.theme.primaryBackground};
`;

const SecondContainer = styled.View`
  background-color: ${(props) => props.theme.secondBackground};
`;
const TextPrimary = styled.Text`
  color: ${(props) => props.theme.textColor};
`;
export default Notification;
