import React, { useState, useEffect } from 'react';
import { Text, View, Modal, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Image, SafeAreaView } from "react-native";
import MainStyle from "../../style/mainStyle";
import * as ImagePicker from 'expo-image-picker';
import {
  TextPrimary,
  SecondContainer,
  InputText,
  PrimaryContainer,
  EntypoIcon
} from "../../style/themeComponent";
import { ScrollView } from 'react-native-gesture-handler';

const PostModal = ({
  text,
  setText,
  setModalVisible,
  modalVisible,
  posted,
  setImage,
  image
}) => {
  

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={MainStyle.centeredView}>
        <SecondContainer style={MainStyle.modalView}>
          <KeyboardAvoidingView keyboardVerticalOffset={25} style={{flex:1}} behavior={Platform.OS == "ios" ? "padding" : "height"}>
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
              onPress={() => posted()}
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
            {image !== null ? 
              (
                <PrimaryContainer style={[{flex: 0.4, borderRadius: 10, marginBottom: 10}, MainStyle.shadow]}>
                  <Image style={styles.imgPost} source={{uri: image}} resizeMode="cover"/>
                  <TouchableOpacity style={styles.delImg} onPress={() => setImage(null)}>
                    <EntypoIcon name={"cross"} size={24} style={{color: "#FFF"}} />
                  </TouchableOpacity>
                </PrimaryContainer>  
              ):
              null
            }
            <TouchableOpacity onPress={pickImage}>
              <PrimaryContainer style={[styles.imgButton, MainStyle.shadow]}>
                <EntypoIcon name={"images"} size={20} />
                <TextPrimary style={{textAlign: "center", fontWeight:"500", paddingLeft: 5}}>Select Image</TextPrimary>
              </PrimaryContainer>
            </TouchableOpacity>             
          </KeyboardAvoidingView>
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
    flex: 1,
  },
  imgButton:{
    borderRadius: 5,
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  imgPost:{
    width: "100%",
    height: "100%",
    borderRadius: 10
    
  },
  delImg:{
    position: "absolute",
    right: 5,
    top: 5,
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: 50
  }
});
export default PostModal;
