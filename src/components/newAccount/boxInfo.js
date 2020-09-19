import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import mainStyle from "../../style/mainStyle";
import MainStyle from "../../style/mainStyle";
import Tag from "./tag";
import UserList from "./userList";
import Icon from "react-native-vector-icons/Entypo";
const BoxInfo = ({ id }) => {
  const userJson = [
    {
      id: 1,
      username: "Username",
      firstName: "Antaya",
      lastName: "Turky",
      sex: "male",
      age: "120",
      address: "Bangkok, Thailand",
      intro:
        "I love prime minister TU Lorem Ipsum is simply dummy text of the printing",
      friendCount: "24",
      follwerCount: "1.56K",
      speaks: ["Thai", "English", "Spain"],
      looking: ["Email", "Friendship", "Language"],
      hobAndInterTag: ["Cycling", "Football", "Photography"],
      favTag: [
        {
          name: "music",
          list: ["silly fools", "youngOhm", "youngNo", "pee saderd"],
        },
        {
          name: "Foods",
          list: ["steak"],
        },
      ],
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
    },
    {
      id: 2,
      username: "Poohcid",
      firstName: "Poohcid",
      lastName: "Rugrawi",
      sex: "male",
      age: "21",
      address: "Bangkok, Thailand",
      intro:
        "I love prime minister TU Lorem Ipsum is simply dummy text of the printing",
      friendCount: "13",
      follwerCount: "12.56K",
      speaks: ["Thai", "English", "Spain"],
      looking: ["Email", "Friendship", "Language"],
      hobAndInterTag: [
        "abc",
        "odoodd",
        "oopl",
        "abc",
        "odoodd",
        "oopl",
        "abc",
        "odoodd",
        "oopl",
      ],
      favTag: [
        {
          name: "music",
          list: [
            "silly fools",
            "youngOhm",
            "youngNo",
            "pee saderd",
            "silly fools",
            "youngOhm",
            "youngNo",
            "pee saderd",
          ],
        },
        {
          name: "Foods",
          list: ["steak"],
        },
      ],
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const user = userJson[id - 1];

  const {
    username,
    firstName,
    lastName,
    sex,
    age,
    address,
    intro,
    ...other
  } = user;
  const { speaks, looking, hobAndInterTag, favTag, about } = user;
  const image = require("../../../assets/5.png");
  const callTag = (value, index) => {
    return <Tag key={index} tagName={value} />;
  };

  const callFavTag = (value, index) => {
    return (
      <View style={styles.boxTag} key={index}>
        <Text style={styles.tagText}>{value.name} :</Text>
        <View style={styles.boxTagList}>{value.list.map(callTag)}</View>
      </View>
    );
  };

  return (
    <React.Fragment>
      <View style={styles.main}>
        <View style={styles.userInfo}>
          <Image style={styles.imgProfile} source={image} />
          <View style={{ flex: 1, justifyContent: "flex-end", marginLeft: 20 }}>
            <Text style={MainStyle.textBold}>{username}</Text>
            <Text style={MainStyle.textWhite}>
              {sex} {firstName} {lastName}, {age} y.e.
            </Text>
            <Text style={MainStyle.textWhite}>{address}</Text>
            {/* <TouchableOpacity style={styles.editProfile}>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                Edit Profile
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>

      <UserList user={user} />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 20,
        }}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={[[mainStyle.textWhite], { textAlign: "center" }]}>
            <Icon name="user" size={20} color="white" />
            Follow
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={[[mainStyle.textWhite], { textAlign: "center" }]}>
            <Icon name="chat" size={20} color="white" />
            Message
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.abilityContainer}>
        <View style={styles.abilityItem}>
          <Text style={[MainStyle.textWhiteBold, { fontSize: 18 }]}>
            Speaks
          </Text>
          {speaks.map((value, index) => (
            <Text
              key={index}
              style={[MainStyle.textWhite, { paddingLeft: 10 }]}
            >
              {value}
            </Text>
          ))}
        </View>
        <View style={styles.abilityItem}>
          <Text style={[MainStyle.textWhiteBold, { fontSize: 18 }]}>
            Looking for
          </Text>
          {looking.map((value, index) => (
            <Text
              key={index}
              style={[MainStyle.textWhite, { paddingLeft: 10 }]}
            >
              {value}
            </Text>
          ))}
        </View>
      </View>

      <View style={{ marginHorizontal: 10 }}>
        <Text style={[MainStyle.textWhiteBold, { fontSize: 18 }]}>
          Hobbies & interests Tag
        </Text>
        <View style={styles.boxTag}>
          <Text style={styles.tagText}>Tag :</Text>
          <View style={styles.boxTagList}>{hobAndInterTag.map(callTag)}</View>
        </View>
      </View>

      <View style={{ marginHorizontal: 10 }}>
        <Text style={[MainStyle.textWhiteBold, { fontSize: 18 }]}>
          Favorite Tag
        </Text>
        {favTag.map(callFavTag)}
        {/*}
        <View style={styles.boxTag}>
          <Text style={styles.tagText}>Tag:</Text>
          {tag.map(callTag)}
        </View>
          */}
      </View>

      <View style={styles.aboutMe}>
        <Text style={[MainStyle.textWhiteBold, { fontSize: 18 }]}>
          About Me
        </Text>
        <Text style={MainStyle.textWhite}>{about}</Text>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  imgProfile: {
    width: 90,
    height: 90,
    backgroundColor: "#CCC",
    borderRadius: 100,
    marginRight: 10,
    bottom: -25,
    borderColor: "#1a1a1a",
    borderWidth: 2,
  },
  userInfo: {
    flexDirection: "row",
    paddingHorizontal: 10,
    flex: 3,
    paddingBottom: 10,
  },
  editProfile: {
    backgroundColor: "#FF8850",
    marginVertical: 10,
    padding: 4,
    borderRadius: 3,
  },
  main: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FF5350",
    paddingTop: 25,
  },
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
    color: "white",
    marginHorizontal: 10,
  },
  abilityContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  aboutMe: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    borderWidth: 2,
    borderColor: "#FF5350",
    borderRadius: 50,
    paddingVertical: 10,
    marginHorizontal: 10,
    flex: 1,
  },
});
export default BoxInfo;
