import React, {useEffect, useState} from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Dimensions } from "react-native";
import Schema from "../schema";
import { SecondContainer } from "../style/themeComponent";
import {useSelector} from 'react-redux'
import path from '../path'

const screenWidth = Math.round(Dimensions.get("window").width);

const Navbar = ({ navigation }) => {
  const routeName = useRoute().name;
  const token = useSelector((state) => state.Authorize.token)
  const url = path.urlMyprofile
  const [userId, setUserId] = useState()

  useEffect(() => {
    fetch(url,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token,
          },
    })
    .then( async (res) => {
            if(res.status === 200){
                const data = await res.json()
                setUser(...data)
            }
            else if(res.status === 401){
                navigation.navigate("Login")
            }
        }
    )
    .catch(err => "Mute error")
}, [])



  
  return (
    <SecondContainer style={navbarCondition()}>
      <View style={stylesCondition(routeName, "Home")}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("../../assets/navbar/friends.png")}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
      <View style={stylesCondition(routeName, "Messenger")}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Messenger")}
        >
          <Image
            source={require("../../assets/navbar/chat.png")}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
      <View style={stylesCondition(routeName, "Search")}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Search")}
        >
          <Image
            source={require("../../assets/navbar/search.png")}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
      <View style={stylesCondition(routeName, "Account")}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Account", { id: Schema.user })}
        >
          <Image
            source={require("../../assets/navbar/account.png")}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
    </SecondContainer>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    height: 55,
  },
  boxContent: {
    flex: 1,
  },
  button: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  img: {
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
});

const stylesCondition = (routeName, name) => {
  if (routeName === name) {
    return {
      borderTopWidth: 3,
      borderColor: "#FF5350",
      flex: 1,
    };
  }
  return {
    borderTopWidth: 0,
    flex: 1,
  };
};

const navbarCondition = () => {
  if (screenWidth >= 768) {
    return {
      flexDirection: "row",
      paddingHorizontal: "20%",
      height: 55,
    };
  } else {
    return {
      flexDirection: "row",
      height: 55,
    };
  }
};

export default Navbar;
