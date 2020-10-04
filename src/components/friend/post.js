import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import Mainstyle from "../../style/mainStyle";

const Post = ({ title, likePost, like, id }) => {
  const [likeStatus, setLikeStatus] = useState(false);
  const likeControl = () => {
    likePost(id, likeStatus);
    setLikeStatus(!likeStatus);
  };
  return (
    <View style={styles.postContainer}>
      <View>
        <Image
          source={require("../../../assets/man.png")}
          style={styles.postImgProfile}
        />
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.postUsername}>Username</Text>
          <Text style={{ color: "#FFF" }}>50m</Text>
        </View>
        <View>
          <Text style={styles.postTitle}>{title}</Text>
        </View>
        <TouchableOpacity onPress={likeControl}>
          <Text style={Mainstyle.textWhite}>Like {like}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    backgroundColor: "#323232",
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 1,
  },
  postImgProfile: {
    resizeMode: "cover",
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "#FF5350",
    marginRight: 10,
  },
  postTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "100",
    marginVertical: 3,
  },
  postUsername: {
    fontWeight: "bold",
    color: "#FFF",
    marginRight: 10,
  },
});

export default Post;
