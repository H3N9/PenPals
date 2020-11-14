import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MainStyle from "../../style/mainStyle";
import PostModal from "./postModal";
import { SecondContainer } from "../../style/themeComponent";
import {useSelector} from 'react-redux'
import path from '../../path'
import {postLoad, imageUpload} from '../../fetch'

const CreatePost = ({post, setPost, navigation}) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const controller = new AbortController
  const signal = controller.signal
  const authorize = useSelector((state) => state.Authorize.authorize)

  const posted = (data) =>{
    setPost([data, ...post])
  }

  const postToDB = (imageName) =>{
    const newPostObj = {
      title: text,
      imagePost: imageName
    }
    postLoad(navigation, authorize.token, path.urlCreatePost, newPostObj, posted, signal)
    // setPost([...post, data])
    // setModalVisible(!modalVisible);
  }

  const imageUploadPosted = () => {
    const newPostObj = {
      title: text,
      imagePost: ""
    }
    setModalVisible(!modalVisible);
    if (image !== null)
      imageUpload(image, postToDB)
    else
      postLoad(navigation, authorize.token, path.urlCreatePost, newPostObj, posted, signal)
  };

  return (
    <React.Fragment>
      <SecondContainer
        style={[styles.createContainer, MainStyle.boxContent, MainStyle.shadow]}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../../assets/man.png")}
            style={styles.createImgProfile}
          />
          <TouchableOpacity
            style={styles.postInput}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={MainStyle.textGray}>Press To Post</Text>
          </TouchableOpacity>
        </View>
      </SecondContainer>
      <PostModal
        text={text}
        image={image}
        setImage={setImage}
        setText={setText}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        posted={imageUploadPosted}
      />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  createContainer: {
    flexDirection: "column",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginBottom: 20,

  },
  createImgProfile: {
    resizeMode: "cover",
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "#FF5350",
    marginRight: 10,
  },
  postInput: {
    borderColor: "gray",
    borderWidth: 1,
    flex: 1,
    borderRadius: 50,
    padding: 10,
  },
});

export default CreatePost;
