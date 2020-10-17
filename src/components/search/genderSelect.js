import React from "react";
import { StyleSheet, View } from "react-native";
import MainStyle from "../../style/mainStyle";
import SwitchSelector from "react-native-switch-selector";
import {
  PrimaryContainer,
  InputText,
  TextPrimary,
  MaterialIcon,
  FontAwesomeIcon,
} from "../../style/themeComponent";

const GenderSelect = ({ filterData, setFilterData }) => {
  const genderData = [
    { label: "Any", value: "Any" },
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];
  const updateFilterData = (value) => {
    filterData.gender = value;
    setFilterData(filterData);
  };
  return (
    <PrimaryContainer style={styles.dataFilterContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesomeIcon name="intersex" size={30} />
        <TextPrimary style={MainStyle.textBold}>Gender </TextPrimary>
      </View>
      <SwitchSelector
        options={genderData}
        style={{ width: 170 }}
        buttonColor="#91d18b"
        textColor="#DDD"
        selectedTextStyle={{ color: "#1a1a1a" }}
        backgroundColor="#747474"
        initial={0}
        onPress={(value) => updateFilterData(value)}
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
});

export default GenderSelect;
