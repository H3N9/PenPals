import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import BoxInfo from "./boxInfo";
import UserList from "./userList";

const BoxProfile = () => {
  return (
    <React.Fragment>
      <BoxInfo />
      <UserList listName={"Friend"}/>
      <UserList listName={"Following"}/>
    </React.Fragment>
  );
};

export default BoxProfile;
