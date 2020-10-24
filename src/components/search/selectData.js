import RNPickerSelect from "react-native-picker-select";
import React, { useState, useEffect } from "react";
import { Platform, Picker } from "react-native";
import MainStyle from "../../style/mainStyle";
import styled from "styled-components/native";
import { useSelector } from "react-redux";

const selectData = ({ setData, filterData }) => {
  const theme = useSelector((state) => state.themeReducer.theme);
  const [countryData, setCountryData] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://restcountries.eu/rest/v2/all");
    const jsonData = await data.json();
    const allCountry = jsonData.map((value) => value.name);
    setCountryData(() =>
      allCountry.map((itemValue) => {
        return { label: itemValue, value: itemValue };
      })
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

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
        items={countryData}
      />
    );
  } else {
    return (
      <PickerSelect
        selectedValue={filterData.country}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => updateFilterData(itemValue)}
        value={filterData.country}
      >
        {countryData.map((data) => (
          <Picker.Item label={data.value} value={data.value} key={data.value} />
        ))}
      </PickerSelect>
    );
  }
};

const PickerSelect = styled(Picker)`
  color: ${(props) => props.theme.textColor};
`;

export default selectData;
