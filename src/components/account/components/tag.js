import React from "react";
import { StyleSheet, Text, TouchableOpacity, Alert, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { putLoad, postLoadCb } from "../../../fetch"
import path from "../../../path"
import {useSelector} from 'react-redux'
import { CommonActions } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { actionSearch } from '../../../../redux/searchForm'
import {EntypoIcon} from "../../../style/themeComponent";

const Tag = ({ id, tagName, navigation, isAuthUser, setUser }) => {
  const authorize = useSelector((state) => state.Authorize.authorize)
  const dispatch = useDispatch()
  const controller = new AbortController()
  const signal = controller.signal

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

  const searchByTag = () =>{
    //dispatch(actionSearch({tag: [ id ]}))
    // navigation.dispatch(
    //       CommonActions.navigate({
    //         name: "Search"
    //       })
    // )

    navigation.navigate("SubSearch", {searchForm: {tag: [id]}, name: tagName })
  }

  return (
    <TouchableOpacity 
      style={styles.tagButton}
      onPress={searchByTag}
      onLongPress={deleteAlert}
      delayLongPress={500}
    >
      <LinearGradient
        colors={["#2A39AA", "#348AD9"]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.9, y: 0.5 }}
      >
        <Text style={styles.tagText}>
          {tagName}
        </Text>
        {isAuthUser &&  
          <EntypoIcon
            name="circle-with-cross"
            size={16}
            style={{ color: "#FFF", paddingLeft: 3}}
          />}
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
    justifyContent: "center",
    alignItems: "center"
  },
  tagButton: {
    borderRadius: 25,
    marginBottom: 5
  },
  gradient: {
    padding: 5,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginRight: 5,
    flexDirection: "row",
    alignItems: "center"
  },
});
export default Tag;
