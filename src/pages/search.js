import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  FlatList
} from "react-native";
// import Homebar from "../components/homebar";
import Navbar from "../components/navbar";
import Suggestion from "../components/search/suggestion";
import MainStyle from "../style/mainStyle";
import SearchBar from "../components/search/searchBar";
import { Dimensions } from "react-native";
import { PrimaryContainer } from "../style/themeComponent";
import Schema from "../schema";

const screenWidth = Math.round(Dimensions.get("window").width);

const Search = ({ navigation }) => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true);
  const userSearchAllUrl = Schema.apiUrl+"/search/user"

  useEffect(() =>{
    fetch(userSearchAllUrl)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setData(json)
        setLoading(false)
      })
  }, [])

  return (
    <PrimaryContainer style={MainStyle.mainBackground}>
      <SearchBar />
      <View style={stylesCondition()}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) =>{
            return <Suggestion user={item} navigation={navigation} />
          }}
        />
      )}
      </View>
      <Navbar navigation={navigation} />
    </PrimaryContainer>
  );
};

const stylesCondition = () => {
  if (screenWidth >= 768) {
    return { flex: 1, marginHorizontal: "20%" };
  } else {
    return { flex: 1 };
  }
};

export default Search;
