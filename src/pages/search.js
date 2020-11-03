import React from "react";
import { FlatList, View, Text } from "react-native";
import Suggestion from "../components/search/suggestion";
import MainStyle from "../style/mainStyle";
import SearchBar from "../components/search/searchBar";
import { Dimensions } from "react-native";
import { PrimaryContainer, SecondContainer } from "../style/themeComponent";
import { Value } from "react-native-reanimated";

const screenWidth = Math.round(Dimensions.get("window").width);

const Search = ({ navigation }) => {
  const id = ["1", "2", "3"];
  const renderItem = ({ item }) => {
    return <Suggestion userId={item} navigation={navigation} />;
  };
  return (
    <PrimaryContainer style={MainStyle.mainBackground}>
      <SearchBar />
      <SecondContainer style={{ flex: 1 }}>
        <FlatList
          data={id}
          renderItem={renderItem}
          keyExtractor={(item) => item}
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
