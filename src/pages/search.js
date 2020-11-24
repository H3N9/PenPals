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

const Search = ({ navigation }) => {
  const authorize = useSelector((state) => state.Authorize.authorize)
  const searchForm = useSelector((state) => state.Search)
  const {token} = authorize
  const [users, setUsers] = useState([])
  const url = path.urlSearchUser
  const quickSearchUrl = path.urlQuickSearch
  const isFocused = useIsFocused()
  const controller = new AbortController
  const signal = controller.signal
  // const [refresh, setRefresh] = useState(false)

  //สำหรับการ Refresh หน้า
  // const userRefresh = (info) =>{
  //   setUsers(info)
  //   setRefresh(false)   
  // }
  // const refreshHandle = async() =>{
  //   setRefresh(true)
  //   getLoad(navigation, token, url, userRefresh, signal)
  // }

  useEffect(() =>{
    getLoad(navigation, token, url, setUsers, signal)
  }, [])

  useEffect(() =>{
    console.log(searchForm)
    if (searchForm.keyword !== undefined){
      if (searchForm.keyword[0] === ""){
        getLoad(navigation, token, url, setUsers, signal)
      }
      else{
        postLoad(navigation, token, quickSearchUrl, { keyword: searchForm.keyword }, setUsers, signal)
      }
    }
    else{
      if (searchForm.country !== undefined)
        postLoad(navigation, token, url, searchForm, setUsers, signal)
    }
  }, [searchForm])

  const renderSuggestion = ({ item, index }) =>{
    return (<Suggestion user={item} key={index} navigation={navigation} />)
    // return (
    //   <React.Fragment>
    //     {item == id.length - 2 ? <View style={{ width: 10 }} /> : null}
    //     <Suggestion user={item} navigation={navigation} />
    //     {item == id.length ? <View style={{ width: 10 }} /> : null}
    //   </React.Fragment>
    // );
  }

  const renderItem = ({ item }) => {
    return <Suggestion user={item} navigation={navigation} />;
  };

  return (
    // <PrimaryContainer style={MainStyle.mainBackground}>
    //   <SearchBar />
    //   {isLoading ? (<ActivityIndicator/>) : (
    //   <FlatList style={stylesCondition()}
    //     data={users}
    //     renderItem={renderSuggestion}
    //     keyExtractor={item => item.id.toString()}
    //   />)}
  //const id = ["1", "2", "3"];
    <PrimaryContainer style={MainStyle.mainBackground}>
      <SearchBar navigation={navigation} />
      <PrimaryContainer style={{ flex: 1 }}>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          // refreshing={refresh}
          // onRefresh={refreshHandle}
        />
      </PrimaryContainer>
    </PrimaryContainer>

    // <PrimaryContainer style={MainStyle.mainBackground}>
    //   <SearchBar />
    //   <SecondContainer style={{ flex: 1 }}>
    //     <FlatList
    //       data={users}
    //       renderItem={renderSuggestion}
    //       keyExtractor={item => item.id.toString()}
    //       horizontal={true}
    //       showsHorizontalScrollIndicator={false}
    //       snapToInterval={screenWidth * 0.68 + 17 * 2}
    //       decelerationRate="fast"
    //     />
    //   </SecondContainer>
    // </PrimaryContainer>
      /* <ScrollView style={stylesCondition()}>
        <Suggestion userId={"1"} navigation={navigation} />
        <Suggestion userId={"2"} navigation={navigation} />
        <Suggestion userId={"3"} navigation={navigation} />
      </ScrollView> */
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
