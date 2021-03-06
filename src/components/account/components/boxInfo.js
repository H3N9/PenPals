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
import { Value } from "react-native-reanimated"
import Schema from "../../../schema"
import path from "../../../path"
import {useSelector} from 'react-redux'
const BoxInfo = ({ userDetail, navigation, auth }) => {
  const theme = useSelector((state) => state.themeReducer.theme);
  const {
    username,
    gender,
    firstName,
    lastName,
    age,
    city,
    nation,
    image,
    birthdate
  } = userDetail;
  const imageBackground = {
    uri: "https://www.fungjaizine.com/wp-content/uploads/2019/05/D4B_6117.jpg",
  };
  

  const ageCalculate = (birthdate) =>{
    const setBirthDate = new Date(birthdate)
    if(!isNaN(setBirthDate.getTime())){
      const now = new Date()
      const deff = now-setBirthDate
      const day = deff/(1000*3600*24)
      const years = Math.floor(day/365)
      return `${years} y.e.`
    }
    return ""
    
  }
  //const image = require("../../../../assets/man.png");

   const textInfo = `${firstName} ${lastName}\n${gender} ${ageCalculate(birthdate)}\n${city} ${nation}`;
 // const textInfo = `${gender} ${age} y.e.\n${city} ${nation}`;

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
        <LinearGradient
          colors={theme.mode === "dark" ? ["#212121", "rgba(0,0,0,1)"] : ["#FFF", "rgba(0,0,0,1)"] }
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.98 }}
        >
          {!auth && (
            <TouchableOpacity
              style={{
                marginTop: 10,
                marginLeft: 15,
                width: 37,
                height: 37,
                justifyContent: "center",
                backgroundColor: theme.mode === "dark" ? "rgba(200, 200, 200, 0.3);" : "rgba(0, 0, 0, 0.6);",
                borderRadius: 500,
              }}
              onPress={() => navigation.goBack()}
            >
              <FontAwesomeIcon
                name="chevron-left"
                size={20}
                style={{
                  textAlign: "center",
                  color: "#FFF",
                }}
              />
            </TouchableOpacity>
          )}
          <View style={styles.userInfo}>
            <View style={[MainStyle.shadow]}>
              <Image style={styles.imgProfile} source={{uri: (path.urlImage+image)}} />
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
      <View style={{ backgroundColor: theme.mode === "light" ? "rgba(0,0,0,1)" : "rgba(0,0,0,1)" }}>
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
