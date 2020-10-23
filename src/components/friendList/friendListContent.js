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

const FriendListContent = ({ navigation }) => {
  const DATA = [
    {
      id: "1",
      name: "Gabriel Magalhaes",
      imgUrl:
        "https://resources.premierleague.com/premierleague/photos/players/250x250/p226597.png",
    },
    {
      id: "2",
      name: "Mesut Ozil",
      imgUrl:
        "https://resources.premierleague.com/premierleague/photos/players/250x250/p37605.png",
    },
    {
      id: "3",
      name: "Thomas Partay",
      imgUrl:
        "https://resources.premierleague.com/premierleague/photos/players/250x250/p167199.png",
    },
    {
      id: "4",
      name: "Bukayo Saka",
      imgUrl:
        "https://resources.premierleague.com/premierleague/photos/players/250x250/p223340.png",
    },
    {
      id: "5",
      name: "Alexandre Lacazette",
      imgUrl:
        "https://resources.premierleague.com/premierleague/photos/players/250x250/p59966.png",
    },
    {
      id: "6",
      name: "Pierre-Emerick Aubameyang",
      imgUrl:
        "https://resources.premierleague.com/premierleague/photos/players/250x250/p54694.png",
    },
  ];

  const [text, setText] = useState("");
  const [friendFilter, setFriendFilter] = useState(DATA);

  const inputHandle = (value) => {
    setText(value);
    if (value == "") {
      return setFriendFilter(DATA);
    }
    const valueUpper = value.toUpperCase();
    const filteredData = friendFilter.filter(
      (itemValue) => itemValue.name.toUpperCase().indexOf(valueUpper) > -1
    );
    return setFriendFilter(filteredData);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.friendContainer}>
        <TouchableOpacity>
          <Image source={{ uri: item.imgUrl }} style={styles.imgProfile} />
        </TouchableOpacity>
        <TextPrimary style={styles.username}>{item.name}</TextPrimary>

        <TouchableOpacity style={styles.unfriendButton}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>UnFriend</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <PrimaryContainer style={{ paddingVertical: 10, flex: 1 }}>
      <InputTextBg
        placeholder="Type to Search"
        placeholderTextColor="#AAA"
        style={styles.textInput}
        value={text}
        onChangeText={(value) => inputHandle(value)}
        clearButtonMode="always"
      />
      <FlatList
        data={friendFilter}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </PrimaryContainer>
  );
};

const styles = StyleSheet.create({
  friendContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
    padding: 10,
    justifyContent: "space-between",
  },
  imgProfile: {
    width: 67,
    height: 67,
    backgroundColor: "#FFF",
    borderRadius: 100,
  },
  username: {
    fontWeight: "500",
    fontSize: 16,
    paddingHorizontal: 10,
    flex: 1,
  },
  unfriendButton: {
    backgroundColor: "#ff3239",
    padding: 5,
    borderRadius: 5,
  },
  textInput: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
});
export default FriendListContent;
