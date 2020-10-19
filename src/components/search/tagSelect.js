import React from "react";
import { StyleSheet, View } from "react-native";
import MainStyle from "../../style/mainStyle";
import {
  PrimaryContainer,
  TextPrimary,
  FontAwesomeIcon,
} from "../../style/themeComponent";

const TagSelect = ({ filterData, setFilterData }) => {
  return (
    <PrimaryContainer style={styles.dataFilterContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesomeIcon name="tag" size={30} />
        <TextPrimary style={MainStyle.textBold}> Tag </TextPrimary>
      </View>
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

export default TagSelect;
