import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import mainStyle from "../../../style/mainStyle";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const ContactButton = ({ title, handle, iconName }) => {
  const styles = StyleSheet.create({
    button: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#696969",
      borderRadius: 10,
      paddingVertical: 10,
      marginHorizontal: iconName === "pencil-square-o" ? 10 : 20,
      flex: 1,
    },
  });
  return (
    <TouchableOpacity style={styles.button} onPress={handle}>
      {iconName === "pencil-square-o" ? (
        <FontAwesome name={iconName} size={22} color="white" />
      ) : (
        <Icon name={iconName} size={22} color="white"></Icon>
      )}

      <Text style={[[mainStyle.textWhiteBold], { textAlign: "center" }]}>
        {iconName === "pencil-square-o" ? " " + title : null}
      </Text>
    </TouchableOpacity>
  );
};

export default ContactButton;
