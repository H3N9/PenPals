import React from "react";
import {
  View,
  ScrollView,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";
import {
  PrimaryContainer,
  SecondContainer,
  SimpleLineIcon,
  TextPrimary,
  MaterialIcon,
} from "../style/themeComponent";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { switchTheme } from "../../redux/themeAction";
import { lightTheme, darkTheme } from "../style/Theme";
import { actionAuthorize } from '../../redux/authorize'

const screenWidth = Math.round(Dimensions.get("window").width);

const Setting = ({ navigation }) => {
  const theme = useSelector((state) => state.themeReducer.theme);
  const dispatch = useDispatch();

  const darkModeHandle = () => {
    if (theme.mode == "light") {
      dispatch(switchTheme(darkTheme));
    } else {
      dispatch(switchTheme(lightTheme));
    }
  };
  const logout = () =>{
    const data = {id:"", token:""}
    dispatch(actionAuthorize(data))
    navigation.navigate("Login")
  }

  return (
    <PrimaryContainer style={MainStyle.mainBackground}>
      <SecondContainer style={styles.headerContainer}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SimpleLineIcon name={"arrow-left"} size={20} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TextPrimary
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Setting
          </TextPrimary>
        </View>

        <View style={{ flex: 1 }}></View>
      </SecondContainer>
      <ScrollView style={stylesCondition()}>
        <View style={styles.settingSection}>
          <TextPrimary style={{ fontWeight: "bold", fontSize: 16 }}>
            DarkMode
          </TextPrimary>
          <Switch
            trackColor={{ false: "#767577", true: "#4dc35e" }}
            thumbColor={theme.mode == "light" ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => darkModeHandle()}
            value={theme.mode == "light" ? false : true}
          />
        </View>
        <View
          style={[
            styles.settingSection,
            { justifyContent: "center", borderBottomWidth: 0 },
          ]}
        >
          <TouchableOpacity onPress={() => logout()} style={styles.logOutButton}>
            <MaterialIcon name={"logout"} style={{ color: "#fff" }} size={19} />
            <Text style={{ color: "#FFF", fontWeight: "bold" }}>SignOut</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </PrimaryContainer>
  );
};

const stylesCondition = () => {
  if (screenWidth >= 768) {
    return { flex: 1, marginHorizontal: "20%" };
  } else {
    return { flex: 1 };
  }
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingVertical: 15,
  },
  settingSection: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    padding: 15,
    borderBottomColor: "#aaa",
    borderBottomWidth: 0.3,
  },
  logOutButton: {
    backgroundColor: "#ec4b5b",
    padding: 15,
    paddingHorizontal: 50,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Setting;
