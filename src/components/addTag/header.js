import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import styled from "styled-components/native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { putLoad } from "../../fetch"
import path from "../../path"
import {useSelector} from 'react-redux'

const Header = ({ navigation, tagData, setSearchTag, tagSelected, initTag }) => {
  const [text, setText] = useState("");
  const authorize = useSelector((state) => state.Authorize.authorize)

  const inputHandle = (value) => {
    if (value == "") {
      setText("");
      return setSearchTag(initTag);
    }
    const valueUpper = value.toUpperCase();
    const filteredData = initTag.filter(
      (itemValue) => {
        console.log((itemValue["category"]+" "+itemValue.name))
        return (itemValue["category"]+" "+itemValue.name).toUpperCase().indexOf(valueUpper) > -1
      }
    );
    setSearchTag(filteredData);
  };

  const goAccountPage = () =>{
    navigation.goBack()
  }

  const addTag = () =>{
    const formAddTag = {tag: tagSelected.map(item1 => item1.id)}
    //console.log(formAddTag)
    putLoad(authorize.token, path.urlAddTag, formAddTag, goAccountPage)
  }

  return (
    <View>
      <MainContainer>
        <TouchableOpacity
          style={{ marginRight: 15, padding: 5 }}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome name="chevron-left" size={20} />
        </TouchableOpacity>
        <InputText
          placeholder="Search Tag"
          placeholderTextColor="#999"
          value={text}
          onChangeText={(value) => setText(value)}
          returnKeyType="search"
          onSubmitEditing={() => {
            inputHandle(text);
            Keyboard.dismiss();
          }}
        />
        <TouchableOpacity
          style={{ marginLeft: 15, opacity: tagSelected.length === 0 ? 0.5 : 1 }}
          onPress={addTag}
          disabled={tagSelected.length === 0}
        >
          <TextPrimary>Done</TextPrimary>
        </TouchableOpacity>
      </MainContainer>
    </View>
  );
};

const InputText = styled.TextInput`
  color: ${(props) => props.theme.textColor};
  flex: 1;
  font-size: 16px;
  padding: 7px 7px 7px 7px;
  background: ${(props) => (props.theme.mode == "dark" ? "#555" : "#DDD")};
  border-radius: 5px;
`;

const MainContainer = styled.View`
  background-color: ${(props) => props.theme.secondBackground};
  flex-direction: row;
  padding: 10px 10px;
  align-items: center;
`;

const TextPrimary = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

const FontAwesome = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.textColor};
`;

export default Header;
