import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Keyboard,
} from "react-native";
import MainStyle from "../../style/mainStyle";
import AntDesign from "react-native-vector-icons/AntDesign";
import SearchFilter from "./searchFilter";
import styled from "styled-components/native";

const searchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ marginVertical: 15 }}>
      <View style={styles.headerContainer}>
        <View style={{ flex: 1 }}>
          <TextPrimary style={{ fontSize: 27, fontWeight: "bold" }}>
            Search
          </TextPrimary>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <AntDesignIcon name="filter" style={{ fontSize: 30 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={{ flex: 1 }}>
          <InputText
            style={styles.textInput}
            placeholder="Type to Search"
            placeholderTextColor="#AAA"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            returnKeyType="search"
            onSubmitEditing={() => console.log(searchText)}
            clearButtonMode="always"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text
              style={MainStyle.textWhite}
              onPress={() => {
                Keyboard.dismiss();
                setSearchText("");
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <SearchFilter
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  searchContainer: {
    marginTop: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
  },
  textInput: {
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: "#FF5350",
    padding: 11,
    marginLeft: 10,
    borderRadius: 5,
  },
});

const TextPrimary = styled.Text`
  color: ${(props) => props.theme.textColor};
`;
const InputText = styled.TextInput`
  background-color: ${(props) => props.theme.secondBackground};
  color: ${(props) => props.theme.textColor};
`;
const AntDesignIcon = styled(AntDesign)`
  color: ${(props) => props.theme.textColor};
`;

export default searchBar;
