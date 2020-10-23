import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TextPrimary, SecondContainer } from "../../style/themeComponent";
import TextPost from "./components/textPost";
import ImagePost from "./components/imagePost";

const Post = ({ type, date, like, id, user }) => {
  const image = type.image || undefined;
  const text = type.text || undefined;
  const likeControl = () => {};

  const postControl = (image, text) => {
    if (image && text) {
      return (
        <View style={{ paddingVertical: 5 }}>
          <TextPost text={text} />
          <ImagePost />
        </View>
      );
    } else if (image) {
      return <ImagePost />;
    } else if (text) {
      return <TextPost text={text} />;
    }
  };

  return (
    <SecondContainer style={styles.postContainer}>
      <View style={styles.boxIdentity}>
        <View>
          <Image
            source={require("../../../assets/man.png")}
            style={styles.postImgProfile}
          />
        </View>
        <View style={{ justifyContent: "center" }}>
          <View style={{ flexDirection: "row" }}>
            <TextPrimary style={styles.postUsername}>{user}</TextPrimary>
            <TextPrimary>{date}</TextPrimary>
          </View>
        </View>
      </View>

      <View style={{ flex: 1, paddingVertical: 5 }}>
        {postControl(image, text)}
        <TouchableOpacity style={styles.likeButton}>
          <AntDesign
            name={like ? "heart" : "hearto"}
            size={24}
            color={like ? "#ff5350" : "#AAA"}
          />
          <TextPrimary style={{ marginLeft: 4 }}>{like}</TextPrimary>
        </TouchableOpacity>
      </View>
    </SecondContainer>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 5,
    marginBottom: 20,
  },
  postImgProfile: {
    resizeMode: "cover",
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "#FF5350",
    marginRight: 10,
  },
  postUsername: {
    fontWeight: "bold",
    marginRight: 10,
  },
  likeButton: {
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 5,
    paddingTop: 5,
  },
  boxIdentity: {
    flexDirection: "row",
    padding: 5,
  },
});

export default Post;
