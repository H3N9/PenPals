import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import ProfileHeader from "./profileHeader";
import TextProfile from "./textProfile";

const MainEdit = () => {
  return (
    <React.Fragment>
      <ProfileHeader />
      <TextProfile />
    </React.Fragment>
  );
};

export default MainEdit;
