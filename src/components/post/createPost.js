import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MainStyle from "../../style/mainStyle";
import PostModal from "./postModal";
import { SecondContainer } from "../../style/themeComponent";

const CreatePost = ({post, setPost}) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const posted = () => {
    const newPostObj = {
      id: (post.length+1).toString(),
      user: "Username",
      type:{
        image: image === null ? "" : image,
        text: text
      },
      date: "50m",
      like:false
    }
    setPost([...post, newPostObj])
    setModalVisible(!modalVisible);
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
        posted={posted}
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
