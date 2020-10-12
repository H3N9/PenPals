import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MainStyle from "../../style/mainStyle";
import Tag from "./tag";
import styled from "styled-components/native";
const ListTag = ({ tag, title }) => {
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
      <TextPrimary style={[MainStyle.textBold, { fontSize: 18 }]}>
        {title}
      </TextPrimary>
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
});
const TextPrimary = styled.Text`
  color: ${(props) => props.theme.textColor};
`;
const SecondContainer = styled.View`
  background-color: ${(props) => props.theme.secondBackground};
`;
export default ListTag;
