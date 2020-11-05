import RNPickerSelect from "react-native-picker-select";
import React from "react";
import { View, Platform, Picker } from "react-native";
//import {Picker} from '@react-native-community/picker'
import styled from "styled-components/native";
import { useSelector } from "react-redux";

const InputSelectType = ({ placeholder, newDetail, data, setNewDetail }) => {
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
          onValueChange={(value) => {
            newDetail[data] = value
            setNewDetail({...newDetail})
          }}
        />
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <PickerSelect
          style={{ height: 50, flex: 1 }}
          on
          onValueChange={(value) => {
            newDetail[data] = value
            setNewDetail({...newDetail})
          }}
        >
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
