import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import ProfileHeader from "./profileHeader";
import InputProfile from "./inputProfile";

const MainEdit = ({ navigation }) => {
  return (
    <React.Fragment>
      <ProfileHeader navigation={navigation} />
      <InputProfile />
    </React.Fragment>
  );
};

export default MainEdit;
