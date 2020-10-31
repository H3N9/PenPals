import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MainStyle from "../../style/mainStyle";
import { useSelector } from "react-redux";
import ModalSelect from "./modalSelect";
import {
  PrimaryContainer,
  TextPrimary,
  FontAwesomeIcon,
  EntypoIcon,
} from "../../style/themeComponent";
import { FlatList } from "react-native-gesture-handler";

const CountrySelect = ({
  filterData,
  setFilterData,
  focusData,
  title,
  fetchUrl,
}) => {
  const theme = useSelector((state) => state.themeReducer.theme);
  const [modalVisible, setModalVisible] = useState(false);
  const [delPress, setDelPress] = useState(false); // ใช้สำหรับเมื่อ state ตัวนี้มีการเปลี่ยนแปลงจะ render Flatlist ใหม่

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.tagButton}
        onPress={() => {
          filterData[focusData] = filterData[focusData].filter(
            (value) => value !== item
          );
          setFilterData(filterData);
          setDelPress(!delPress);
        }}
      >
        <TextPrimary style={{ color: "#FFF" }}>{item}</TextPrimary>
        <EntypoIcon
          name="circle-with-cross"
          size={15}
          style={{ color: "#FFF" }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <React.Fragment>
      <PrimaryContainer style={styles.dataFilterContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesomeIcon name={title === "Tag" ? "tag" : "flag"} size={30} />
          <TextPrimary style={[MainStyle.textBold, { flex: 1 }]}>
            {"  " + title}
          </TextPrimary>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={[styles.button, { borderColor: theme.textColor }]}
          >
            <TextPrimary>Press to Select</TextPrimary>
          </TouchableOpacity>
        </View>

        <ModalSelect
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          focusData={focusData}
          filterData={filterData}
          setFilterData={setFilterData}
          fetchUrl={fetchUrl}
        />
      </PrimaryContainer>
      <PrimaryContainer
        style={{ padding: 10, flexDirection: "row", alignItems: "center" }}
      >
        <TextPrimary>Selected : </TextPrimary>
        <FlatList
          data={filterData[focusData]}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          extraData={delPress}
          horizontal={true}
        />
      </PrimaryContainer>
    </React.Fragment>
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
    borderRadius: 5,
    padding: 5,
    borderWidth: 1,
  },
  tagButton: {
    padding: 5,
    backgroundColor: "#888",
    marginHorizontal: 5,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CountrySelect;
