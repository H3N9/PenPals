import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TextPrimary, SecondContainer } from "../../style/themeComponent";
import TextPost from "./components/textPost";
import ImagePost from "./components/imagePost";
import MainStyle from "../../style/mainStyle";

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
    <SecondContainer style={[styles.postContainer, MainStyle.shadow]}>
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

      <View style={{ flex: 1, paddingVertical: 0 }}>
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
    marginHorizontal: 7,
    borderRadius: 10,
  },
  postImgProfile: {
    resizeMode: "cover",
    height: 47,
    width: 47,
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
    padding: 8,
  },
  boxIdentity: {
    flexDirection: "row",
    paddingHorizontal: 5,
  },
});

export default Post;
