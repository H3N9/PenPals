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
import styled from "styled-components/native";

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
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={MainStyle.centeredView}>
          <SecondContainer style={MainStyle.modalView}>
            <View style={[MainStyle.modalHeader, { alignItems: "center" }]}>
              <TouchableOpacity
                style={[styles.button]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <TextPrimary>Cancel</TextPrimary>
              </TouchableOpacity>
              <TextPrimary style={[MainStyle.textBold, { fontSize: 18 }]}>
                Createpost
              </TextPrimary>
              <TouchableOpacity
                style={[styles.postButton, styles.button]}
                onPress={posted}
                disabled={text === ""}
              >
                <Text style={MainStyle.textWhite}>Post</Text>
              </TouchableOpacity>
            </View>
            <InputText
              multiline={true}
              placeholder="Type Something"
              placeholderTextColor="#555"
              style={styles.textInput}
              onChangeText={(text) => setText(text)}
              value={text}
            />
          </SecondContainer>
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

const SecondContainer = styled.View`
  background-color: ${(props) => props.theme.secondBackground};
`;

const TextPrimary = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

const InputText = styled.TextInput`
  color: ${(props) => props.theme.textColor};
`;

export default CreatePost;
