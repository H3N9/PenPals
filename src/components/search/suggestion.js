import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MainStyle from "../../style/mainStyle";
import Tag from "../global/tag";
import Icon from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Schema from "../../schema"

const Suggestion = ({ userId }) => {

  const user = Schema.getProfile(userId)
  const { id, username, nation, city, age, hobbies, favorites, describe} = user
  const tag1 = hobbies[0].list[0]
  const tag2 = favorites[0].list[0]

  return (
    <View style={[styles.boxContent, MainStyle.boxContent]}>
      <View>
        <Image
          style={{ width: 70, height: 70, borderRadius: 50 }}
          source={require("../../../assets/man.png")}
        />
        <View style={styles.onlineStatus} />
      </View>
      <View style={{ flex: 1, marginLeft: 5 }}>
        <View style={styles.userDetail}>
          <View style={{ flex: 3 }}>
            {/* Username */}
            <Text style={MainStyle.textBold}>{username}</Text>

            {/* location */}
            <Text style={[{ marginVertical: 2 }, MainStyle.textWhite]}>
              {city}, {nation}
            </Text>

            {/* Tag */}
            <View style={{ flexDirection: "row" }}>
              <Tag tagName={tag1.name} />
              <Tag tagName={tag2.name} />
            </View>
          </View>

          {/* Follower */}
          <View style={{ flex: 1 }}>
            <Text style={MainStyle.textWhite}>30</Text>
          </View>

          <View style={styles.menuSugges}>
            <TouchableOpacity>
              <Entypo name="chat" size={22} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="bookmark" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 1, overflow: "hidden", marginTop: 10 }}>
          <Text style={MainStyle.textGray}>
            ภารตะแฟลชพรีเมียร์เจลติงต๊อง โกลด์เลดี้มาร์เก็ตเคลื่อนย้าย
            ลิมูซีนสตูดิโอ
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContent: {
    height: 130,
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
    flex: 1,
    alignItems: "center",
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
  tagText: {
    marginRight: 10,
    marginTop: 2,
    padding: 2,
    borderRadius: 5,
    backgroundColor: "#FF5350",
    fontSize: 12,
  },
  menuSugges: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Suggestion;
