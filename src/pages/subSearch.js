import React, {useState, useEffect} from "react";
import Suggestion from "../components/search/suggestion";
import MainStyle from "../style/mainStyle";
import SearchBar from "../components/search/searchBar";
import { Dimensions, ActivityIndicator, FlatList, View, Text } from "react-native";
import { PrimaryContainer, SecondContainer } from "../style/themeComponent";
import { Value } from "react-native-reanimated";
import {useSelector} from 'react-redux'
import { useIsFocused } from "@react-navigation/native"
// import schema from "../schema"
import path from '../path'
import {getLoad, postLoad} from '../fetch'

const screenWidth = Math.round(Dimensions.get("window").width);

const Search = ({ navigation, route }) => {
  const authorize = useSelector((state) => state.Authorize.authorize)
  const searchForm = route.params.searchForm
  const {token} = authorize
  const [users, setUsers] = useState([])
  const url = path.urlSearchUser
  const isFocused = useIsFocused()
  const controller = new AbortController
  const signal = controller.signal

  useEffect(() =>{
    postLoad(navigation, token, url, searchForm, setUsers, signal)
  }, [])

  const renderSuggestion = ({ item, index }) =>{
    return (<Suggestion user={item} key={index} navigation={navigation} />)
  }

  const renderItem = ({ item }) => {
    return <Suggestion user={item} navigation={navigation} />;
  };

  return (
    <PrimaryContainer style={MainStyle.mainBackground}>
      <SecondContainer style={{ flex: 1 }}>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </SecondContainer>
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
