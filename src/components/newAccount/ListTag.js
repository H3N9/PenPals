import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import MainStyle from "../../style/mainStyle";
import Tag from "./tag";
import styled from "styled-components/native";
import Entypo from "react-native-vector-icons/Entypo";
const ListTag = ({ tag, title, handle }) => {
  const callTag = (value, index) => {
    return <Tag key={index} tagName={value.name} id={value.id} />;
  };

  const callListTag = (value, index) => {
    return (
      <View style={styles.boxTag} key={index}>
        <TextPrimary style={styles.tagText}>{value.name} :</TextPrimary>
        <View style={styles.boxTagList}>{value.list.map(callTag)}</View>
      </View>
    );
  };

  return (
    <SecondContainer style={[styles.tagTitle, MainStyle.boxContent]}>
      <View style={styles.headerContainer}>
        <TextPrimary style={[MainStyle.textBold, { fontSize: 18 }]}>
          {title}
        </TextPrimary>
        <TouchableOpacity style={styles.addButton} onPress={handle}>
          <Entypo name="plus" size={18} />
        </TouchableOpacity>
      </View>
      {tag.map(callListTag)}
    </SecondContainer>
  );
};

const styles = StyleSheet.create({
  boxTag: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 5,
  },
  boxTagList: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  boxIntro: {
    flex: 1,
    paddingHorizontal: 10,
    padding: 5,
  },
  tagText: {
    marginHorizontal: 10,
  },
  tagTitle: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#90DD70",
    padding: 2,
    paddingHorizontal: 3,
    borderRadius: 50,
    marginLeft: 5,
  },
});
const TextPrimary = styled.Text`
  color: ${(props) => props.theme.textColor};
`;
const SecondContainer = styled.View`
  background-color: ${(props) => props.theme.secondBackground};
`;
export default ListTag;
