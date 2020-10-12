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
import AntDesign from "react-native-vector-icons/AntDesign";
import styled from "styled-components/native";

const Post = ({ title, likePost, like, id }) => {
  const [likeStatus, setLikeStatus] = useState(false);
  const likeControl = () => {
    likePost(id, likeStatus);
    setLikeStatus(!likeStatus);
  };
  return (
    <SecondContainer style={styles.postContainer}>
      <View>
        <Image
          source={require("../../../assets/man.png")}
          style={styles.postImgProfile}
        />
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <TextPrimary style={styles.postUsername}>Username</TextPrimary>
          <TextPrimary>50m</TextPrimary>
        </View>
        <View>
          <TextPrimary style={styles.postTitle}>
            {title}
            {id}
          </TextPrimary>
        </View>
        <TouchableOpacity onPress={likeControl} style={styles.likeButton}>
          <AntDesign
            name={likeStatus ? "heart" : "hearto"}
            size={19}
            color={likeStatus ? "#ff5350" : "#AAA"}
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
    flexDirection: "row",
    paddingVertical: 10,
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
    fontSize: 20,
    fontWeight: "100",
    marginVertical: 5,
  },
  postUsername: {
    fontWeight: "bold",
    marginRight: 10,
  },
  likeButton: {
    alignItems: "center",
    flexDirection: "row",
  },
});

const SecondContainer = styled.View`
  background-color: ${(props) => props.theme.secondBackground};
`;

const TextPrimary = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

export default Post;
