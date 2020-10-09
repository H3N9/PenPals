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

const InputSelectType = ({ placeholder }) => {
  const dataSource = [
    { label: "England", value: "England" },
    { label: "France", value: "France" },
  ];
  if (Platform.OS === "ios") {
    return (
      <View style={{ flex: 1 }}>
        <RNPickerSelect
          style={pickerStyle}
          items={dataSource}
          placeholder={{ label: placeholder, value: null }}
          onValueChange={() => {}}
        />
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Picker
          style={{ height: 50, width: 150, color: "#fff" }}
          onValueChange={() => {}}
        >
          {dataSource.map((data) => (
            <Picker.Item
              label={data.label}
              value={data.value}
              key={data.value}
            />
          ))}
        </Picker>
      </View>
    );
  }
};
const pickerStyle = {
  inputIOS: {
    color: "white",
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderColor: "#777",
    borderBottomWidth: 1,
    borderRadius: 5,
  },
  inputAndroid: {
    color: "white",
  },
  placeholderColor: "white",
  underline: { borderTopWidth: 0 },
  icon: {
    position: "absolute",
    backgroundColor: "transparent",
    borderTopWidth: 5,
    borderTopColor: "#00000099",
    borderRightWidth: 5,
    borderRightColor: "transparent",
    borderLeftWidth: 5,
    borderLeftColor: "transparent",
    width: 0,
    height: 0,
    top: 20,
    right: 15,
  },
};

export default InputSelectType;
