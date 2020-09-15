import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import {useRoute} from '@react-navigation/native'

const Homebar = ({navigation}) => {
  const routeName = useRoute().name
  return (
    <View style={styles.homebar}>
      <View style={styles.boxContent}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ resizeMode: "cover", height: 30, width: 100 }}
        />
      </View>
      <View style={styles.boxContent}>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
        <Image
          source={require("../../assets/navbar/notification.png")}
          style={{ resizeMode: "cover", height: 30, width: 30 }}
        />
        <View style={styles.badge}><Text style={{textAlign: "center", color: "#FFF"}}>!</Text></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homebar: {
    margin: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    paddingVertical: 10,
    marginHorizontal: 20
  },
  boxContent: {
    backgroundColor: "transparent",
  },
  textButton: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 25,
  },
  badge:{
    backgroundColor: "red",
    width: 15,
    height: 17,
    position: "absolute",
    top: -5,
    right: -5,
    borderRadius: 50
  }
});

export default Homebar;
