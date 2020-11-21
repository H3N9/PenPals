import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import {
  PrimaryContainer,
  TextPrimary,
  InputTextBg,
} from "../../style/themeComponent";
import MainStyle from "../../style/mainStyle";
import BoxFriend from './components/boxFriend'

const FriendListContent = ({ handleFilter, navigation, users, text }) => {

  const renderItem = ({ item }) => {
    return (
      <BoxFriend user={item} navigation={navigation} />
    );
  };
  return (
    <PrimaryContainer style={{ paddingVertical: 10, flex: 1 }}>  
          
          
      <FlatList
        ListHeaderComponent={
          <React.Fragment>
            <TextPrimary style={{fontSize: 30, fontWeight: "bold", paddingLeft: 15, padding: 7}}>Friend</TextPrimary>
            <InputTextBg
            placeholder="Type to Search"
            placeholderTextColor="#AAA"
            style={styles.textInput}
            value={text}
            onChangeText={(value) => handleFilter(value)}
            clearButtonMode="always"
          />
          </React.Fragment>
        }
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </PrimaryContainer>
  );
};

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
});
export default FriendListContent;
