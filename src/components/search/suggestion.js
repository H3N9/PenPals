import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MainStyle from "../../style/mainStyle";
import Tag from "../global/tag";
import Schema from "../../schema";
import {
  TextPrimary,
  FontAwesomeIcon,
  EntypoIcon,
} from "../../style/themeComponent";

const Suggestion = ({ navigation, user }) => {
  //const user = Schema.getProfile(userId);
  const {
    id,
    username,
    nation,
    city,
    age,
    hobbies,
    favorites,
    describe,
  } = user;
  const tag1 = hobbies[0].list[0];
  const tag2 = favorites[0].list[0];

  return (
    <View style={[styles.boxContent, MainStyle.boxContent]}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ViewProfile", { id: id, user: user })}
      >
        <Image
          style={{
            width: 70,
            height: 70,
            borderRadius: 50,
            backgroundColor: "#555",
          }}
          source={require("../../../assets/man.png")}
        />
        <View style={styles.onlineStatus} />
      </TouchableOpacity>
      <View style={{ flex: 1, marginLeft: 7 }}>
        <View style={[styles.userDetail]}>
          <View style={{ flex: 3 }}>
            {/* Username */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Account", { id: id })}
            >
              <TextPrimary style={MainStyle.textBold}>{username}</TextPrimary>
            </TouchableOpacity>
            {/* location */}
            <TextPrimary style={{ marginVertical: 1 }}>
              {city}, {nation}
            </TextPrimary>
          </View>
          {/* Follower */}
          <View style={{ flex: 1 }}>
            <TextPrimary>{age}</TextPrimary>
          </View>

          <View style={styles.menuSugges}>
            <TouchableOpacity>
              <EntypoIcon name="chat" size={22} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesomeIcon name="bookmark" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tag */}
        <View style={{ flexDirection: "row" }}>
          <Tag tagName={tag1.name} id={tag1.id} />
          <Tag tagName={tag2.name} id={tag2.id} />
        </View>

        <View style={{ flex: 1, overflow: "hidden", marginTop: 10 }}>
          <Text style={MainStyle.textGray}>{describe}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContent: {
    minHeight: 130,
    padding: 10,
    flexDirection: "row",
    marginBottom: 1,
  },
  profile: {
    width: 60,
    height: 60,
    backgroundColor: "#CCC",
    borderRadius: 100,
    marginRight: 10,
  },
  userDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  onlineStatus: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: "green",
    position: "absolute",
    right: 0,
    bottom: 40,
  },
  menuSugges: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Suggestion;
