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

const InputSelectType = ({ placeholder }) => {
  const dataSource = [
    { label: "England", value: "England" },
    { label: "France", value: "France" },
  ];
  if (Platform.OS === "ios") {
    return (
      <View style={{ flex: 1 }}>
        <RNPicker
          items={dataSource}
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

const RNPicker = styled(RNPickerSelect)`
  color: ${(props) => props.theme.textColor};
`;
const PickerSelect = styled(Picker)`
  color: ${(props) => props.theme.textColor};
`;

export default InputSelectType;
