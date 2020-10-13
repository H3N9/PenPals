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

const selectData = ({ data, setData }) => {
  const dataSource = [
    { label: "England", value: "England" },
    { label: "France", value: "France" },
  ];
  if (Platform.OS === "ios") {
    return (
      <RNPicker onValueChange={(value) => setData(value)} items={dataSource} />
    );
  } else {
    return (
      <PickerSelect
        selectedValue={data}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setData(itemValue)}
      >
        {dataSource.map((data) => (
          <Picker.Item label={data.label} value={data.value} key={data.value} />
        ))}
      </PickerSelect>
    );
  }
};

const RNPicker = styled(RNPickerSelect)`
  color: ${(props) => props.theme.textColor};
`;
const PickerSelect = styled(Picker)`
  color: ${(props) => props.theme.textColor};
`;

export default selectData;
