import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
const Header = () => {
  return (
    <View>
      <MainContainer>
        <TouchableOpacity style={{ marginRight: 15 }}>
          <SimpleLine name="arrow-left" size={20} />
        </TouchableOpacity>
        <InputText placeholder="Search Tag" placeholderTextColor="#999" />
        <TouchableOpacity style={{ marginLeft: 15 }}>
          <TextPrimary>Search</TextPrimary>
        </TouchableOpacity>
      </MainContainer>
    </View>
  );
};

const InputText = styled.TextInput`
  color: ${(props) => props.theme.textColor};
  flex: 1;
  font-size: 16px;
  padding: 5px 5px 5px 5px;
  background: ${(props) => props.theme.mode == "dark" ? "#555" : "#DDD"};
  border-radius: 5px;
`;

const MainContainer = styled.View`
  background-color: ${(props) => props.theme.secondBackground};
  flex-direction: row;
  padding: 15px 10px;
  align-items: center;
`;

const TextPrimary = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

const SimpleLine = styled(SimpleLineIcons)`
  color: ${(props) => props.theme.textColor};
`;

export default Header;
