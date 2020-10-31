import React, {useState, useEffect} from "react";
import { ScrollView } from "react-native";
import Suggestion from "../components/search/suggestion";
import MainStyle from "../style/mainStyle";
import SearchBar from "../components/search/searchBar";
import { Dimensions, ActivityIndicator, FlatList, View } from "react-native";
import { PrimaryContainer } from "../style/themeComponent";
import {useSelector} from 'react-redux'
import schema from "../schema"

const screenWidth = Math.round(Dimensions.get("window").width);

const Search = ({ navigation }) => {
  const authorize = useSelector((state) => state.Authorize.authorize)
  const {token} = authorize
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([])
  const url = schema.url

  useEffect(() =>{
    fetch(url+"/search/user",{
      method: 'GET',
      headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: token,
      }     
    })
    .then((response) => response.json())
    .then((json) =>{
      setUsers(json)
      setLoading(false)
    })
  }, [])

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
      {/* <ScrollView style={stylesCondition()}>
        <Suggestion userId={"1"} navigation={navigation} />
        <Suggestion userId={"2"} navigation={navigation} />
        <Suggestion userId={"3"} navigation={navigation} />
      </ScrollView> */}
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
