import RNPickerSelect from "react-native-picker-select";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  Platform,
  Picker,
} from "react-native";
import MainStyle from "../../style/mainStyle";
import styled from "styled-components/native";
import { useSelector } from "react-redux";

const selectData = ({ setData, filterData }) => {
  const theme = useSelector((state) => state.themeReducer.theme);

  const dataSource = [
    { label: "England", value: "England" },
    { label: "France", value: "France" },
  ];
  const updateFilterData = (value) => {
    filterData.country = value;
    setData(filterData);
  };
  const pickerSelectStyles = {
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderBottomWidth: 1,
      borderColor: "#111",
      color: theme.mode == "dark" ? "#FFF" : "#111",
      paddingRight: 30,
    },
    placeholder: {
      color: "#777",
    },
  };
  if (Platform.OS === "ios") {
    return (
      <RNPickerSelect
        onValueChange={(value) => updateFilterData(value)}
        style={pickerSelectStyles}
        items={dataSource}
      />
    );
  } else {
    return (
      <PickerSelect
        selectedValue={filterData.country}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => updateFilterData(itemValue)}
      >
        {dataSource.map((data) => (
          <Picker.Item label={data.label} value={data.value} key={data.value} />
        ))}
      </PickerSelect>
    );
  }
};

const PickerSelect = styled(Picker)`
  color: ${(props) => props.theme.textColor};
`;

export default selectData;
