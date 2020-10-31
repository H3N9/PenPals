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
    return (
      <React.Fragment>
        {item == id.length - 2 ? <View style={{ width: 10 }} /> : null}
        <Suggestion userId={item} navigation={navigation} />
        {item == id.length ? <View style={{ width: 10 }} /> : null}
      </React.Fragment>
    );
  };
  return (
    <PrimaryContainer style={MainStyle.mainBackground}>
      <SearchBar />
      <SecondContainer style={{ flex: 1 }}>
        <FlatList
          data={id}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToInterval={screenWidth * 0.68 + 17 * 2}
          decelerationRate="fast"
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
