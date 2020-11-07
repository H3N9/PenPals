import React from "react";
import { StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { putLoad } from "../../../fetch"
import path from "../../../path"
import {useSelector} from 'react-redux'

const Tag = ({ id, tagName, navigation, isAuthUser, setUser }) => {
  const authorize = useSelector((state) => state.Authorize.authorize)

  const reloadPage = (status, data) =>{
    if (data.id !== undefined){
      setUser(data)
    }
  }

  const deleteTag = () =>{
    putLoad(authorize.token, path.urlReomvetag, {tag: [ id ]}, reloadPage)
  }

  const deleteAlert = () =>{
    if (isAuthUser !== undefined){
      Alert.alert(
        "Remove Tag!",
        "Are you sure to remove this item",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => deleteTag() }
        ],
        { cancelable: false }
      );
    }
  }

  return (
    <TouchableOpacity 
      style={styles.tagButton}
      onLongPress={deleteAlert}
      delayLongPress={1000}
    >
      <LinearGradient
        colors={["#2A39AA", "#348AD9"]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.9, y: 0.5 }}
      >
        <Text style={styles.tagText}>{tagName}{isAuthUser && "❌"}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  tagText: {
    fontSize: 12,
    color: "#FFF",
    textAlign: "center",
    fontWeight: "600",
  },
  tagButton: {
    borderRadius: 25,
  },
  gradient: {
    padding: 5,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginRight: 5,
  },
});
export default Tag;
