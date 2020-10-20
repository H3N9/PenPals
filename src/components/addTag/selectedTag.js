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

const SelectedTag = ({ tagSelected }) => {
  return (
    <MainContainer>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <TextPrimary style={{ marginLeft: 5, marginVertical: 2 }}>
          SelectedTag :
        </TextPrimary>
        {tagSelected.map((itemValue) => (
          <Tag key={itemValue.id}>
            <Text>{itemValue.title}</Text>
          </Tag>
        ))}
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
  padding: 3px;
  background: #ff5350;
  text-align: center;
  margin: 2px 5px;
`;

export default SelectedTag;
