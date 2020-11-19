import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TextPrimary, SecondContainer } from "../../style/themeComponent";
import TextPost from "./components/textPost";
import ImagePost from "./components/imagePost";
import MainStyle from "../../style/mainStyle";
import {useSelector} from 'react-redux'
import path from "../../path"
import { putLoad } from "../../fetch"

const Post = ({ id, title, imagePost, data, initLike, likeCount, navigation, userId}) => {
  // const image = type.image||undefined
  // const text = type.text||undefined
  const controller = new AbortController
  const signal = controller.signal
  const authorize = useSelector((state) => state.Authorize.authorize)
  const [like, setLike] = useState(initLike)
  const [ numlike, setNumlike ] = useState(likeCount)

  const likeControl = () =>{
    setLike(!like)
    const body = {
      postId: id
    }
    setNumlike(!like ? numlike+1 : numlike-1)
    putLoad(authorize.token, path.urlLike, body, (a) =>{}, signal)
  }

  const postControl = (image, text) =>{
    if(image&&text){
      return (
        <View style={{ paddingVertical: 5 }}>
          <TextPost text={text} />
          <ImagePost imageUrl={image}/>
        </View>
      )
    }
    else if(image){
      return <ImagePost imageUrl={image} />
    }
    else if(text){
      return <TextPost text={text}/>
    }
  }

  return (
    <SecondContainer style={[styles.postContainer, MainStyle.shadow]}>
      <View style={styles.boxIdentity}>
        <TouchableOpacity onPress={() => userId ? navigation.navigate("Account", { user: userId }) : {}}>
          <Image
            source={{uri: path.urlImage+data.imageProfile}}
            style={styles.postImgProfile}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ justifyContent: "center" }}  onPress={() => userId ? navigation.navigate("Account", { user: userId }) : {}}>
          <View style={{ flexDirection: "row" }}>
            <TextPrimary style={styles.postUsername}>{data.firstName} {data.lastName}</TextPrimary>
            <TextPrimary>{data.time}</TextPrimary>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        {postControl(imagePost, title)}
        <TouchableOpacity style={styles.likeButton} onPress={likeControl}>
          <AntDesign
            name={like ? "heart" : "hearto"}
            size={24}
            color={like ? "#ff5350" : "#AAA"}
          />
          <TextPrimary style={{ marginLeft: 4 }}>{numlike}</TextPrimary>
        </TouchableOpacity>
      </View>
    </SecondContainer>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 7,
    marginBottom: 15,
    marginHorizontal: 0,
    borderRadius: 0,
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
