import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MainStyle from "../../../style/mainStyle";
import Tag from "./tag";
import Entypo from "react-native-vector-icons/Entypo";
import { TextPrimary, SecondContainer } from "../../../style/themeComponent";

const ListTag = ({ tag, title, handle, isAuthUser, navigation, setUser }) => {
  const callTag = (value, index) => {
    return <Tag key={index} tagName={value.name} id={value.id} isAuthUser={isAuthUser} navigation={navigation} setUser={setUser} />;
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
    <SecondContainer
      style={[styles.tagTitle, MainStyle.boxContent, MainStyle.shadow]}
    >
      <View style={styles.headerContainer}>
        <TextPrimary style={[MainStyle.textBold, { fontSize: 18 }]}>
          {title}
        </TextPrimary>
        {isAuthUser ? (
          <TouchableOpacity style={styles.addButton} onPress={handle}>
            <Entypo name="plus" size={18} color="#FFF" />
          </TouchableOpacity>
        ) : null}
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
    alignItems: "center",
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
    backgroundColor: "#33AA70",
    padding: 2,
    paddingHorizontal: 3,
    borderRadius: 50,
    marginLeft: 5,
  },
});

export default ListTag;
