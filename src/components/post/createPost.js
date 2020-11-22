import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MainStyle from "../../style/mainStyle";
import PostModal from "./postModal";
import { SecondContainer } from "../../style/themeComponent";
import {useSelector} from 'react-redux'
import path from '../../path'
import {postLoad, imageUpload} from '../../fetch'
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons'; 

const CreatePost = ({post, setPost, navigation}) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const controller = new AbortController
  const signal = controller.signal
  const authorize = useSelector((state) => state.Authorize.authorize)

  const posted = (data) =>{
    setPost([data, ...post])
    setText("")
    setImage(null)
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
      {/* <SecondContainer
        style={[styles.createContainer, MainStyle.boxContent, MainStyle.shadow]}
      > */}
        <LinearGradient
        colors={["#5B86E5", "#36D1DC"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.1, y: 0.95 }}
        style={[styles.createContainer, MainStyle.shadow]}
        >
          <TouchableOpacity
            style={styles.shadow}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Entypo name="new-message" size={24} color="white" />
  
          </TouchableOpacity>
        </LinearGradient>
      {/* // </SecondContainer> */}
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
    width: 56,
    height: 56,
    position: "absolute",
    bottom: 10,
    right: 10,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",

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
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  }
});

export default CreatePost;
