import React from "react";
import { Text, View, Modal, TouchableOpacity, StyleSheet } from "react-native";
import MainStyle from "../../style/mainStyle";
import {
  TextPrimary,
  SecondContainer,
  InputText,
} from "../../style/themeComponent";

const PostModal = ({
  text,
  setText,
  setModalVisible,
  modalVisible,
  posted,
}) => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
export default PostModal;
