import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MainStyle from "../../style/mainStyle";
import { useSelector } from "react-redux";
import ModalSelect from "./modalSelect";
import {
  PrimaryContainer,
  TextPrimary,
  FontAwesomeIcon,
} from "../../style/themeComponent";

const CountrySelect = ({ filterData, setFilterData }) => {
  const theme = useSelector((state) => state.themeReducer.theme);
  const [modalVisible, setModalVisible] = useState(false);
  const countryData = [
    { title: "England", id: "1" },
    { title: "France", id: "2" },
    { title: "Thailand", id: "3" },
    { title: "Brazil", id: "4" },
  ];

  return (
    <PrimaryContainer style={styles.dataFilterContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesomeIcon name="flag" size={30} />
        <TextPrimary style={[MainStyle.textBold, { flex: 1 }]}>
          {" "}
          Country{" "}
        </TextPrimary>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.button}
        >
          <TextPrimary
            style={{
              color: filterData.country == undefined ? "#666" : theme.textColor,
            }}
          >
            {filterData.country == undefined
              ? "Select Country..."
              : filterData.country}
          </TextPrimary>
        </TouchableOpacity>
      </View>
      <ModalSelect
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        data={countryData}
        specialData={"country"}
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

export default CountrySelect;
