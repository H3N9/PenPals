import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";

const SelectedTag = () => {
  return (
    <MainContainer>
      <View>
        <TextPrimary>SelectedTag :</TextPrimary>
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

export default SelectedTag;
