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
import Tag from '../components/account/components/tag'

const screenWidth = Math.round(Dimensions.get("window").width);

const SubSearch = ({ navigation, route }) => {
  const authorize = useSelector((state) => state.Authorize.authorize)
  const searchForm = route.params.searchForm
  const name = route.params.name
  const {token} = authorize
  const [users, setUsers] = useState([])
  const url = path.urlSearchUser
  const isFocused = useIsFocused()
  const controller = new AbortController
  const signal = controller.signal

  useEffect(() =>{
    navigation.setOptions({ title: "Tag | "+name })
    postLoad(navigation, token, url, searchForm, setUsers, signal)
  }, [searchForm])

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

SubSearch.navigationOptions = (navigationData) =>{
  const name = navigationData.navigation.getParam("name");
  console.log(name)
  const headerTitle = "Tag "+name

  return { headerTitle }
}

const stylesCondition = () => {
  if (screenWidth >= 768) {
    return { flex: 1, marginHorizontal: "20%" };
  } else {
    return { flex: 1 };
  }
};

export default SubSearch;
