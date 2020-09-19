import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import BoxInfo from "./boxInfo";
import UserList from "./userList";

const BoxProfile = ({ id }) => {
  return (
    <React.Fragment>
      <BoxInfo id={id}/>
    </React.Fragment>
  );
};

export default BoxProfile;
