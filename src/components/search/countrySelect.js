import React from "react";
import { StyleSheet, View } from "react-native";
import MainStyle from "../../style/mainStyle";
import SelectData from "./selectData";
import {
  PrimaryContainer,
  TextPrimary,
  FontAwesomeIcon,
} from "../../style/themeComponent";

const CountrySelect = ({ filterData, setFilterData }) => {
  return (
    <PrimaryContainer style={styles.dataFilterContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesomeIcon name="flag" size={30} />
        <TextPrimary style={MainStyle.textBold}> Country </TextPrimary>
      </View>
      <SelectData
        filterData={filterData}
        data={filterData.country}
        setData={setFilterData}
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

export default CountrySelect;
