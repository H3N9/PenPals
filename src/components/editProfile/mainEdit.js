import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import ProfileHeader from "./profileHeader";
import InputProfile from "./inputProfile";

const MainEdit = ({ navigation, user }) => {
  // const [newDetail, setNewDetail] = useState({
  //   username: undefined,
  //   name: undefined,
  //   lastName: undefined,
  //   birthDate: undefined,
  //   gender: undefined,
  //   nation: undefined,
  //   city: undefined,
  //   introQuotes: undefined,
  //   aboutMe: undefined,
  //   image: undefined,
  // }); // New User ProfileDetail

  const [newDetail, setNewDetail] = useState(user)

  return (
    <React.Fragment>
      <ProfileHeader
        navigation={navigation}
        setNewDetail={setNewDetail}
        newDetail={newDetail}
      />
      <InputProfile newDetail={newDetail} setNewDetail={setNewDetail} navigation={navigation}/>
    </React.Fragment>
  );
};

export default MainEdit;
