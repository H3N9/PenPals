import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MainStyle from "../../style/mainStyle";
import ModalSelect from "./modalSelect";
import {
  PrimaryContainer,
  TextPrimary,
  FontAwesomeIcon,
} from "../../style/themeComponent";

const TagSelect = ({ filterData, setFilterData }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const tagData = [
    { title: "name1", id: "1" },
    { title: "name2", id: "2" },
    { title: "name3", id: "3" },
    { title: "name4", id: "4" },
  ];
  return (
    <PrimaryContainer style={styles.dataFilterContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon name="tag" size={30} />
        <TextPrimary style={[MainStyle.textBold, { flex: 1 }]}>Tag</TextPrimary>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.button}
        >
          <TextPrimary
            style={{
              color: filterData.tag == undefined ? "#666" : null,
            }}
          >
            {filterData.tag == undefined ? "Select Tag..." : filterData.tag}
          </TextPrimary>
        </TouchableOpacity>
      </View>
      <ModalSelect
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title="SelectTag"
        data={tagData}
        filterData={filterData}
        setFilterData={setFilterData}
      />
    </PrimaryContainer>
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
  button: {
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#111",
    padding: 10,
  },
});

export default TagSelect;
