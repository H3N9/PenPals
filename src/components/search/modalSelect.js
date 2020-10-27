import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Text,
  FlatList,
  Keyboard,
} from "react-native";
import MainStyle from "../../style/mainStyle";

import {
  SecondContainer,
  TextPrimary,
  InputTextBg,
} from "../../style/themeComponent";

const modalSelect = ({
  modalVisible,
  setModalVisible,
  data,
  filterData,
  setFilterData,
  focusData,
  fetchUrl,
}) => {
  const [text, setText] = useState("");
  const [searchData, setSearchData] = useState(data);

  // const fetchData = async () => {
  //   const data = await fetch(fetchUrl);
  //   const jsonData = await data.json();
  //   const allCountry = jsonData.map((value) => value.name);
  //   const allCountryObj = allCountry.map((itemValue) => {
  //     return { title: itemValue, id: itemValue };
  //   });
  //   console.log(allCountryObj);
  //   setSearchData(allCountryObj);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.tag}>
        <TouchableOpacity
          onPress={() => {
            filterData[focusData] = item.title;
            setFilterData(filterData);
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={styles.tagText}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const inputHandle = (value) => {
    const valueUpper = value.toUpperCase();
    const filteredData = data.filter(
      (itemValue) => itemValue.title.toUpperCase().indexOf(valueUpper) > -1
    );
    return setSearchData(filteredData);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={[MainStyle.centeredView, styles.extraModal]}>
        <SecondContainer style={[MainStyle.modalView, { padding: 0 }]}>
          <View
            style={[
              MainStyle.modalHeader,
              { padding: 10, alignItems: "center" },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <TextPrimary style={{ padding: 12 }}>Cancel</TextPrimary>
            </TouchableOpacity>
          </View>
          <InputTextBg
            placeholder="Type to Search"
            placeholderTextColor="#AAA"
            style={styles.textInput}
            value={text}
            onChangeText={(value) => setText(value)}
            clearButtonMode="always"
            returnKeyType="search"
            onSubmitEditing={() => {
              inputHandle(text);
              Keyboard.dismiss();
            }}
          />
          <FlatList
            data={searchData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SecondContainer>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  dataFilterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  tag: {
    padding: 15,
    backgroundColor: "#FF5350",
    margin: 10,
    borderRadius: 5,
  },
  tagText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textInput: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: "#DDD",
  },
  extraModal: {
    marginTop: "50%",
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default modalSelect;
