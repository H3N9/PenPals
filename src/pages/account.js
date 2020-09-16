import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Navbar from "../components/navbar";
import Homebar from "../components/homebar";
import BoxProfile from '../components/account/boxProfile'
import MainStyle from '../style/mainStyle'

const Account = ({ navigation }) => {
  return (
    <View style={MainStyle.mainBackground}>
      <Homebar navigation={navigation}/>
      <ScrollView style={{flex: 1, marginTop: 5}}>
        <BoxProfile />
      </ScrollView>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default Account;
