import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import MainStyle from "../../style/mainStyle";
import PostModal from "./postModal";
import { SecondContainer } from "../../style/themeComponent";

const CreatePost = ({ addPost }) => {
  const [text, setText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const posted = () => {
    addPost(text);
    setModalVisible(!modalVisible);
    setText("");
  };

  return (
    <React.Fragment>
      <SecondContainer style={[styles.createContainer, MainStyle.boxContent]}>
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
    flex: 1,
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
    color: "#fff",
  },
});

export default CreatePost;
