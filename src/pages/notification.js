import React, {useState} from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Navbar from "../components/navbar";
import Homebar from "../components/homebar";
import BoxProfile from '../components/account/boxProfile'
import MainStyle from '../style/mainStyle'

const Notification = ({ navigation }) => {
  const [ Darkmode, setDarkmode ] = useState(true);
  return (
    <View style={MainStyle.mainBackground}>
      <Homebar navigation={navigation}/>
      <ScrollView style={{flex: 1, marginHorizontal: 10, marginTop: 5}}>
        <Text style={{textAlign: "center", fontSize: 30, color: "#fff"}}>Notification Page</Text>
      </ScrollView>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default Notification;
