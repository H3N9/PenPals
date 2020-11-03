import React, {useState, useEffect} from "react";
import Suggestion from "../components/search/suggestion";
import MainStyle from "../style/mainStyle";
import SearchBar from "../components/search/searchBar";
import { Dimensions, ActivityIndicator, FlatList, View } from "react-native";
import { useIsFocused } from "@react-navigation/native"
import { PrimaryContainer } from "../style/themeComponent";
import {useSelector} from 'react-redux'
import path from '../path'

const screenWidth = Math.round(Dimensions.get("window").width);

const Search = ({ navigation }) => {
  const authorize = useSelector((state) => state.Authorize.authorize)
  const {token} = authorize
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([])
  const url = path.urlSearchUser
  const isFocused = useIsFocused()

  useEffect(() =>{
    fetch(url,{
      method: 'GET',
      headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: token,
      }     
    })
    .then( async (response) => {
      if(response.status === 200){
        const json = await response.json()
        setUsers(json)
        setLoading(false)
      }
      else if(response.status === 401){
        navigation.navigate("Login")
      }
    })
  }, [isFocused])

  const renderSuggestion = ({ item, index }) =>{
    return (<Suggestion user={item} key={index} navigation={navigation} />)
  }

  return (
    <PrimaryContainer style={MainStyle.mainBackground}>
      <SearchBar />
      {isLoading ? (<ActivityIndicator/>) : (
      <FlatList style={stylesCondition()}
        data={users}
        renderItem={renderSuggestion}
        keyExtractor={item => item.id.toString()}
      />)}
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
