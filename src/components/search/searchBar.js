import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import MainStyle from "../../style/mainStyle";
import SearchFilter from "./searchFilter";
import {
  TextPrimary,
  InputTextBg,
  AntDesignIcon,
} from "../../style/themeComponent";

const searchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ marginVertical: 10, paddingBottom: 5 }}>
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
          <InputTextBg
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
    backgroundColor: "#777",
    padding: 11,
    marginLeft: 10,
    borderRadius: 5,
  },
});

export default searchBar;
