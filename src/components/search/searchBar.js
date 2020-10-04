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

const searchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ marginVertical: 15 }}>
      <View style={styles.headerContainer}>
        <View style={{ flex: 1 }}>
          <Text
            style={[MainStyle.textWhite, { fontSize: 27, fontWeight: "bold" }]}
          >
            Search
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <AntDesign
              name="filter"
              style={[MainStyle.textWhiteBold, { fontSize: 30 }]}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={{ flex: 1 }}>
          <TextInput
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
    backgroundColor: "#323232",
    color: "#fff",
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

export default searchBar;
