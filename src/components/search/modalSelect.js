import React, { useState } from "react";
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
import { LinearGradient } from "expo-linear-gradient";
import {
  SecondContainer,
  TextPrimary,
  InputTextBg,
} from "../../style/themeComponent";
import { useSelector } from "react-redux";

const modalSelect = ({
  modalVisible,
  setModalVisible,
  data,
  filterData,
  setFilterData,
  focusData,
  fetchUrl,
}) => {
  const theme = useSelector((state) => state.themeReducer.theme);
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
  const isHave = (title) => {
    const index = filterData[focusData].findIndex((value) => value === title);
    if (index === -1) {
      return false;
    } else {
      return true;
    }
  };

  const renderItem = ({ item }) => {
    return (
      <LinearGradient
        colors={["#385362", theme.mode === "dark" ? "#314799" : "#333"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.9, y: 0.5 }}
        style={[styles.tag, { opacity: isHave(item.title) ? 0.3 : 1 }]}
      >
        <TouchableOpacity
          onPress={() => {
            filterData[focusData].push(item.title);
            setFilterData(filterData);
            setModalVisible(!modalVisible);
          }}
          disabled={isHave(item.title) ? true : false}
        >
          <Text style={styles.tagText}>{item.title}</Text>
        </TouchableOpacity>
      </LinearGradient>
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
            style={[
              styles.textInput,
              { backgroundColor: theme.primaryBackground },
            ]}
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
  tag: {
    padding: 12,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#777",
  },
  tagText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFF",
  },
  textInput: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  extraModal: {
    marginTop: "50%",
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default modalSelect;
