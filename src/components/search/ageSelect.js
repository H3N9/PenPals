import React, {useState} from "react";
import { StyleSheet, View } from "react-native";
import MainStyle from "../../style/mainStyle";
import {
  PrimaryContainer,
  InputTextBg,
  TextPrimary,
  MaterialIcon,
} from "../../style/themeComponent";

const AgeSelect = ({ filterData, setFilterData}) => {
  const [min, setMin] = useState(filterData.minAge)
  const [max, setMax] = useState(filterData.maxAge)
  const updateMinAge = (value) => {
    filterData.minAge = value;
    setMin(value)
    setFilterData(filterData);
  };
  const updateMaxAge = (value) => {
    setMax(value)
    filterData.maxAge = value;
    setFilterData(filterData);
  };
  return (
    <PrimaryContainer style={styles.dataFilterContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialIcon name="human-male-boy" size={30} />
        <TextPrimary style={MainStyle.textBold}>Age </TextPrimary>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <InputTextBg
          keyboardType="numeric"
          style={styles.textInput}
          value={min}
          onChangeText={(value) => updateMinAge(value)}
          maxLength={2}
        />
        <TextPrimary style={MainStyle.textBold}> - </TextPrimary>
        <InputTextBg
          keyboardType="numeric"
          style={styles.textInput}
          value={max}
          onChangeText={(value) => updateMaxAge(value)}
          maxLength={2}
        />
      </View>
    </PrimaryContainer>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: 40,
    borderRadius: 5,
    padding: 5,
  },
  dataFilterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});

export default AgeSelect;
