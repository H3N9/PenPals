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

const InputSelectType = ({ placeholder }) => {
  const theme = useSelector((state) => state.themeReducer.theme);
  const dataSource = [
    { label: "England", value: "England" },
    { label: "France", value: "France" },
  ];
  const pickerSelectStyles = {
    inputIOS: {
      paddingVertical: 8,
      marginHorizontal: 3,
      borderBottomWidth: 1,
      borderColor: "#777",
      color: theme.mode == "dark" ? "#FFF" : "#111",
      paddingRight: 30,
    },
    placeholder: {
      color: "#777",
    },
  };
  if (Platform.OS === "ios") {
    return (
      <View style={{ flex: 1 }}>
        <RNPickerSelect
          items={dataSource}
          style={pickerSelectStyles}
          placeholder={{ label: placeholder, value: null }}
          onValueChange={() => {}}
        />
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <PickerSelect style={{ height: 50, flex: 1 }} onValueChange={() => {}}>
          {dataSource.map((data) => (
            <Picker.Item
              label={data.label}
              value={data.value}
              key={data.value}
            />
          ))}
        </PickerSelect>
      </View>
    );
  }
};

const PickerSelect = styled(Picker)`
  color: ${(props) => props.theme.textColor};
`;

export default InputSelectType;
