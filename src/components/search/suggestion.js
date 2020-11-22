import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MainStyle from "../../style/mainStyle";
import Tag from "../account/components/tag";
import { useSelector } from "react-redux";
import {
  TextPrimary,
  FontAwesomeIcon,
  EntypoIcon,
  Ionic,
} from "../../style/themeComponent";
import { Dimensions } from "react-native";
import path from '../../path'
import {postLoad} from '../../fetch'

const screenWidth = Math.round(Dimensions.get("window").width);

const Suggestion = ({ navigation, user }) => {
  //const user = Schema.getProfile(userId);
  const theme = useSelector((state) => state.themeReducer.theme);
  const authorize = useSelector((state) => state.Authorize.authorize)
  const {token, userId} = authorize
  const {
    username,
    image,
    nation,
    city,
    age,
    hobbies,
    favorites,
    describe,
    gender,
    firstName,
    lastName
  } = user;
  let tag1
  let tag2
  const controller = new AbortController
	const signal = controller.signal

  const chatRoom = () =>{
    console.log("okay")
		const urlCreateChat = path.urlCreateChat
		const data = {userTwo: user.userId}
		postLoad(navigation, token, urlCreateChat, data, redirectChat, signal)
	}

	const redirectChat = (data) => {
			const room = data.id
			const texts = data.message
			navigation.navigate("ChatRoom", {
				initialTexts: texts,
				interlocutor: user,
				room:room,
				userId:userId
			})
	}

  if (hobbies[0].list.length > 0)
    tag1 = hobbies[0].list[0];
  if (favorites.length > 0)
    tag2 = favorites[0].list[0];

  return (
    <View style={[styles.boxContent, MainStyle.boxContent]}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Account", { user: user })}
        style={MainStyle.shadow}
      >
        <Image
          style={[styles.imgProfile]}
          //source={require("../../../assets/man.png")}
          source={{ uri: path.urlImage+image }}
        />
      </TouchableOpacity>
      <View style={{ flex: 1, marginLeft: 7 }}>
        <View style={[styles.userDetail]}>
          <View style={{ flex: 3 }}>
            {/* Username */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Account", { user: user })}
            >
              <TextPrimary style={{fontWeight: "700", fontSize: 15}}>{firstName} {lastName}</TextPrimary>
            </TouchableOpacity>
            {/* location */}
            <TextPrimary style={{ marginVertical: 3, fontSize: 13 }}>
              {city} {nation}
            </TextPrimary>
          </View>
          {/* Follower */}
          <View style={{ flex: 2, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            {gender === "male" ? <FontAwesomeIcon name="male" size={22} color="white" /> : <FontAwesomeIcon name="female" size={22} color="white" />}
            <TextPrimary style={{fontSize: 15, fontWeight: "600"}}>{" "+age}</TextPrimary>
          </View>

          <View style={styles.menuSugges}>
            <TouchableOpacity onPress={() => chatRoom()} style={{backgroundColor: theme.mode === "light" ? "#DDD": "#444", width: 35, height:35, borderRadius: 50, justifyContent: "center", alignItems: "center",}}>
              <Ionic name="ios-chatbubbles" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tag */}
        <View style={{ flexDirection: "row" }}>
          {(hobbies[0].list.length > 0) && <Tag tagName={tag1.name} id={tag1.id} navigation={navigation}/>}
          {(favorites.length > 0) && <Tag tagName={tag2.name} id={tag2.id} navigation={navigation}/>}
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
  menuSugges: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
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
