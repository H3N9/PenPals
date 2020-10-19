import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TextPrimary, SecondContainer } from "../../style/themeComponent";
import Schema from "../../schema";

const Post = ({ title, likePost, like, id }) => {
  const username = Schema.getProfile(Schema.user).username
  const date = "50m"
  const image = id%2
  const status = title
  const [likeStatus, setLikeStatus] = useState(false);
  const likeControl = () => {
    likePost(id, likeStatus);
    setLikeStatus(!likeStatus);
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
        <View style={{justifyContent:'center'}}>
          <View style={{ flexDirection: "row" }}>
            <TextPrimary style={styles.postUsername}>{username}</TextPrimary>
            <TextPrimary>{date}</TextPrimary>
          </View>
        </View>
      </View>
      
      <View style={{ flex: 1 }}>
        <View>
          <TextPrimary style={styles.postTitle}>
            {status}
            {id}
          </TextPrimary>
        </View>
        {image? <View>
          <Image style={styles.image} source={require('../../../assets/5.png')} />
        </View>:<View></View>}
        <TouchableOpacity onPress={likeControl} style={styles.likeButton}>
          <AntDesign
            name={likeStatus ? "heart" : "hearto"}
            size={24}
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
    flexDirection: "column",
    paddingVertical: 10,
    marginBottom: 2,
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
    paddingVertical: 5,
    paddingLeft: 5
  },
  postUsername: {
    fontWeight: "bold",
    marginRight: 10,
  },
  likeButton: {
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 5
  },
  image:{
    height: Dimensions.get('window').width-50,
    width: Dimensions.get('window').width,
  },
  boxIdentity:{
    flexDirection:"row",
    paddingLeft: 5,
  }
});

export default Post;
