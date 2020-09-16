import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Homebar from "../components/homebar";
import Navbar from "../components/navbar";
import Suggestion from "../components/search/suggestion"
import MainStyle from '../style/mainStyle'

const Search = ({ navigation }) => {
  return (
    <View style={MainStyle.mainBackground}>
      <Homebar navigation={navigation}/>
      <ScrollView style={{flex: 1, marginTop: 5}}>
          <Suggestion/>
          <Suggestion/>
          <Suggestion/>
      </ScrollView>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default Search;
