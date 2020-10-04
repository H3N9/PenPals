import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Dimensions } from "react-native";
import Schema from '../schema'

const screenWidth = Math.round(Dimensions.get("window").width);

const Navbar = ({ navigation }) => {
  const routeName = useRoute().name;
  return (
    <View style={navbarCondition()}>
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
          onPress={() => navigation.navigate("Account", {id: Schema.user})}
        >
          <Image
            source={require("../../assets/navbar/account.png")}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#323232",
    flexDirection: "row",
    height: 55,
  },
  boxContent: {
    backgroundColor: "#323232",
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
      backgroundColor: "#323232",
      flex: 1,
    };
  }
  return {
    borderTopWidth: 3,
    borderColor: "#323232",
    backgroundColor: "#323232",
    flex: 1,
  };
};
const navbarCondition = () => {
  if (screenWidth >= 768) {
    return {
      backgroundColor: "#323232",
      flexDirection: "row",
      paddingHorizontal: "20%",
      height: 55,
    };
  } else {
    return {
      backgroundColor: "#323232",
      flexDirection: "row",
      height: 55,
    };
  }
};
export default Navbar;
