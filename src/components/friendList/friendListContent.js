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
  // const DATA = [
  //   {
  //     id: "1",
  //     name: "Gabriel Magalhaes",
  //     imgUrl:
  //       "https://resources.premierleague.com/premierleague/photos/players/250x250/p226597.png",
  //   },
  //   {
  //     id: "2",
  //     name: "Mesut Ozil",
  //     imgUrl:
  //       "https://resources.premierleague.com/premierleague/photos/players/250x250/p37605.png",
  //   },
  //   {
  //     id: "3",
  //     name: "Thomas Partay",
  //     imgUrl:
  //       "https://resources.premierleague.com/premierleague/photos/players/250x250/p167199.png",
  //   },
  //   {
  //     id: "4",
  //     name: "Bukayo Saka",
  //     imgUrl:
  //       "https://resources.premierleague.com/premierleague/photos/players/250x250/p223340.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Alexandre Lacazette",
  //     imgUrl:
  //       "https://resources.premierleague.com/premierleague/photos/players/250x250/p59966.png",
  //   },
  //   {
  //     id: "6",
  //     name: "Pierre-Emerick Aubameyang",
  //     imgUrl:
  //       "https://resources.premierleague.com/premierleague/photos/players/250x250/p54694.png",
  //   },
  // ];
  // const [text, setText] = useState("");
  // const [friendFilter, setFriendFilter] = useState(users);
  // const inputHandle = (value) => {
  //   setText(value);
  //   if (value === "") {
  //     return setFriendFilter(users);
  //   }
  //   const valueUpper = value.toUpperCase();
  //   const filteredData = friendFilter.filter(
  //     (itemValue) => itemValue.username.toUpperCase().indexOf(valueUpper) > -1
  //   );
  //   return setFriendFilter(filteredData);
  // };

  const renderItem = ({ item }) => {
    return (
      <BoxFriend user={item} navigation={navigation} />
    );
  };
  console.log(users)
  return (
    <PrimaryContainer style={{ paddingVertical: 10, flex: 1 }}>
      <InputTextBg
        placeholder="Type to Search"
        placeholderTextColor="#AAA"
        style={styles.textInput}
        value={text}
        onChangeText={(value) => handleFilter(value)}
        clearButtonMode="always"
      />
      <FlatList
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
