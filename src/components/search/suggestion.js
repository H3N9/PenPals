import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MainStyle from "../../style/mainStyle";
import Tag from "../account/components/tag";
import Schema from "../../schema";
import {
  TextPrimary,
  FontAwesomeIcon,
  EntypoIcon,
  PrimaryContainer,
  SecondContainer,
} from "../../style/themeComponent";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);

const Suggestion = ({ navigation, userId, user }) => {
  //const user = Schema.getProfile(userId);
  console.log(user)
  const {
    id,
    username,
    image,
    nation,
    city,
    age,
    hobbies,
    favorites,
    describe,
    gender,
  } = user;
  const tag1 = hobbies[0].list[0];
  const tag2 = favorites[0].list[0];

  return (
    <View style={[styles.boxContent, MainStyle.boxContent]}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ViewProfile", { user: user })}
        style={MainStyle.shadow}
      >
        <Image
          style={[styles.imgProfile]}
          //source={require("../../../assets/man.png")}
          source={{ uri: Schema.url+"/image/"+image }}
        />
        <View style={styles.onlineStatus} />
      </TouchableOpacity>
      <View style={{ flex: 1, marginLeft: 7 }}>
        <View style={[styles.userDetail]}>
          <View style={{ flex: 3 }}>
            {/* Username */}
            <TouchableOpacity
              onPress={() => navigation.navigate("ViewProfile", { user: user })}
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
    shadowColor: "#000",
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
  imgProfile: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "#555",
    shadowColor: "#111",
  },
});

// const styles = StyleSheet.create({
//   boxContent: {
//     paddingHorizontal: 30,
//     paddingVertical: 40,
//     flexDirection: "column",
//     marginBottom: 1,
//     margin: 10,
//     borderRadius: 10,
//     height: "80%",
//     width: screenWidth / 1.3,
//     marginTop: 20,
//   },
//   profile: {
//     width: 60,
//     height: 60,
//     backgroundColor: "#CCC",
//     borderRadius: 100,
//     marginRight: 10,
//   },
//   userDetail: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     flex: 1,
//   },
//   onlineStatus: {
//     width: 20,
//     height: 20,
//     borderRadius: 100,
//     backgroundColor: "green",
//     position: "absolute",
//     left: 50,
//     bottom: 0,
//   },
//   menuSugges: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingVertical: 10,
//   },
//   imgProfile: {
//     width: 70,
//     height: 70,
//     borderRadius: 50,
//     backgroundColor: "#555",
//     shadowColor: "#111",
//   },
// });

export default Suggestion;
