import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import MainStyle from "../../../style/mainStyle";
import {
  FontAwesomeIcon,
  PrimaryContainer,
} from "../../../style/themeComponent";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { Value } from "react-native-reanimated";

const BoxInfo = ({ userDetail, navigation, auth }) => {
  const {
    username,
    gender,
    firstName,
    lastName,
    age,
    city,
    nation,
  } = userDetail;
  const imageBackground = {
    uri: "https://www.fungjaizine.com/wp-content/uploads/2019/05/D4B_6117.jpg",
  };
  const image = require("../../../../assets/man.png");

  // const textInfo = `${firstName} ${lastName}\n${gender} ${age} y.e.\n${city} ${nation}`;
  const textInfo = `${gender} ${age} y.e.\n${city} ${nation}`;

  const styles = StyleSheet.create({
    imgProfile: {
      width: 85,
      height: 85,
      backgroundColor: "#CCC",
      borderRadius: 100,
      marginRight: 10,
      bottom: -5,
    },
    userInfo: {
      flexDirection: "row",
      paddingHorizontal: 15,
      flex: 3,
      paddingTop: 30,
      paddingBottom: 20,
    },
    main: {
      flex: 1,
      flexDirection: "column",
      paddingTop: !auth ? 30 : 70,
    },
  });

  return (
    <React.Fragment>
      <ImageBackground style={styles.main} source={imageBackground}>
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,1)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.98 }}
        >
          {!auth && (
            <TouchableOpacity
              style={{
                marginLeft: 15,
                width: 37,
                height: 37,
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.6);",
                borderRadius: 500,
              }}
              onPress={() => navigation.goBack()}
            >
              <FontAwesomeIcon
                name="chevron-left"
                size={20}
                style={{
                  textAlign: "center",
                  color: "#fff",
                }}
              />
            </TouchableOpacity>
          )}
          <View style={styles.userInfo}>
            <View style={[MainStyle.shadow]}>
              <Image style={styles.imgProfile} source={image} />
            </View>
            <View
              style={{ flex: 1, justifyContent: "flex-end", marginLeft: 10 }}
            >
              <Text style={{ fontSize: 22, fontWeight: "700", color: "#FFF" }}>
                {username}
              </Text>
              <Text style={MainStyle.textWhite}>{textInfo}</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={{ backgroundColor: "#000" }}>
        <BorderView
          style={{
            padding: 15,
          }}
        ></BorderView>
      </View>
    </React.Fragment>
  );
};

const BorderView = styled(PrimaryContainer)`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export default BoxInfo;
