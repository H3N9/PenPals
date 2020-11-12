import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import mainStyle from "../../../style/mainStyle";
// import Icon from "react-native-vector-icons/Ionicons";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const ContactButton = ({ title, handle, iconName, friendStatus }) => {
  const styles = StyleSheet.create({
    button: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#757575",
      borderRadius: 20,
      paddingVertical: 10,
      marginHorizontal: iconName === "pencil-square-o" ? 10 : 20,
      flex: 1,
    },
  });
  return (
    <TouchableOpacity style={styles.button} onPress={handle}>
      {iconName === "account-edit" ? (
        <MaterialCommunityIcons name={iconName} size={24} color="white" />
      ) : (
        title === "Message" ?(
          <Text style={{color: "#FFF"}}>Chat</Text>
        )
        :
        (
          <Text style={{color: "#FFF"}}>{friendStatus}</Text>
        )
      )}

      <Text style={[[mainStyle.textWhiteBold], { textAlign: "center" }]}>
        {iconName === "account-edit" ? " " + title : null}
      </Text>
    </TouchableOpacity>
  );
};

export default ContactButton;
