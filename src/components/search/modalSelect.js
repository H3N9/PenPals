import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Text,
  FlatList,
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
  title,
  data,
  filterData,
  setFilterData,
}) => {
  const [text, setText] = useState("");
  const [filterTag, setFilterTag] = useState(data);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.tag}>
        <TouchableOpacity
          onPress={() => {
            filterData.tag = item.title;
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
    setText(value);
    if (value == "") {
      return setFilterTag(data);
    }
    const valueUpper = value.toUpperCase();
    const filteredData = filterTag.filter(
      (itemValue) => itemValue.title.toUpperCase().indexOf(valueUpper) > -1
    );
    return setFilterTag(filteredData);
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
            onChangeText={(value) => inputHandle(value)}
            clearButtonMode="always"
          />
          <FlatList
            data={filterTag}
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
