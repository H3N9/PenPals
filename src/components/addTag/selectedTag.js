import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { color, Value } from "react-native-reanimated";
import styled from "styled-components/native";
import {EntypoIcon} from "../../style/themeComponent";

const SelectedTag = ({
  tagSelected,
  setTagSelected,
  searchTag,
  setSearchTag,
}) => {
  const delTag = (itemValue) => {
    const tagDeleted = tagSelected.filter((value) => value.id !== itemValue.id);
    const enableButton = searchTag.map((value) => {
      if (itemValue.name == value.name) {
        value.isSelected = false;
      }
      return value;
    });
    setSearchTag(enableButton);
    setTagSelected(tagDeleted);
  };
  const renderItem = (tagItem, index) => {
    return (
      <Tag onPress={() => delTag(tagItem.item)} key={index}>
        <Text style={{color: "#FFF", fontWeight: "500", fontSize: 15}}>{tagItem.item.name}</Text>
        <EntypoIcon
            name="circle-with-cross"
            size={16}
            style={{ color: "#FFF", paddingLeft: 3}}
        />
      </Tag>
    );
  };
  return (
    <MainContainer>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <TextPrimary style={{ marginLeft: 5, marginVertical: 2 }}>
          Selected :
        </TextPrimary>
        <FlatList
          data={tagSelected}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          style={{ width: "100%" }}
        />
      </View>
    </MainContainer>
  );
};

const MainContainer = styled.View`
  background-color: ${(props) => props.theme.secondBackground};
  flex-direction: row;
  padding: 10px 0;
`;

const TextPrimary = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
`;

const Tag = styled.TouchableOpacity`
  font-weight: bold;
  border-radius: 50px;
  padding: 3px 7px;
  margin: 0 2px;
  background: #888;
  flex-direction: row;
`;

export default SelectedTag;
