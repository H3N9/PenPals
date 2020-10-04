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
      <View style={[styles.createContainer, MainStyle.boxContent]}>
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
            <Text style={MainStyle.textGray}>Type To Post!</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={MainStyle.centeredView}>
          <View style={MainStyle.modalView}>
            <View style={MainStyle.modalHeader}>
              <TouchableOpacity
                style={[styles.button]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={MainStyle.textWhite}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.postButton, styles.button]}
                onPress={posted}
                disabled={text === ""}
              >
                <Text style={MainStyle.textWhite}>Post</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              multiline={true}
              placeholder="Type Something"
              placeholderTextColor="#555"
              style={[MainStyle.textWhite, styles.textInput]}
              onChangeText={(text) => setText(text)}
              value={text}
            />
          </View>
        </View>
      </Modal>
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
  postUsername: {
    fontWeight: "bold",
    color: "#FFF",
    marginRight: 10,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  postButton: {
    backgroundColor: "#FF5350",
  },
  textInput: {
    fontSize: 26,
    marginTop: 10,
  },
});

export default CreatePost;
