import React, { useState, useEffect } from 'react';
import { Text, View, Modal, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ImageBackground, SafeAreaView, TouchableWithoutFeedback, Keyboard } from "react-native";
import MainStyle from "../../style/mainStyle";
import * as ImagePicker from 'expo-image-picker';
import {
  TextPrimary,
  SecondContainer,
  InputText,
  PrimaryContainer,
  EntypoIcon
} from "../../style/themeComponent";

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
          console.log('Sorry, we need camera roll permissions to make this work!')
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

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
              style={[styles.postButton, styles.button,{ opacity: text === "" && image === null ? 0.4: 1, backgroundColor: text === "" && image === null ? "#777" : "rgba(52, 138, 217, 0.8)"}]}
              onPress={() => posted()}
              disabled={text === "" && image === null}
            >
              <Text style={MainStyle.textWhite}>Post</Text>
            </TouchableOpacity>
          </View>
            <View style={{flex: 1}}>
              <InputText
                multiline={true}
                placeholder="Type Something"
                placeholderTextColor="#555"
                style={styles.textInput}
                onChangeText={(text) => setText(text)}
                value={text}
              />
            </View>
            
            {image !== null ? 
              (
                <View style={[{flex: 0.4, borderRadius: 10, marginBottom: 10, alignItems: "flex-end"}, MainStyle.shadow]}>
                    <ImageBackground style={styles.imgPost} source={{uri: image}} resizeMode="cover" imageStyle={{ borderRadius: 10}}>
                      <TouchableOpacity style={styles.delImg} onPress={() => setImage(null)}>
                        <EntypoIcon name={"cross"} size={24} style={{color: "#FFF"}} />
                      </TouchableOpacity>
                    </ImageBackground>
                </View>  
              ):
              null
            }
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS == "ios" ? 25 : 0}>
            <TouchableOpacity onPress={pickImage}>
              <PrimaryContainer style={[styles.imgButton, MainStyle.shadow]}>
                <EntypoIcon name={"images"} size={20} />
                <TextPrimary style={{textAlign: "center", fontWeight:"500", paddingLeft: 5}}>Select Image</TextPrimary>
              </PrimaryContainer>
            </TouchableOpacity>  
            </KeyboardAvoidingView>
        </SecondContainer>    
      </View>  
      </TouchableWithoutFeedback> 

    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  postButton: {
  },
  textInput: {
    fontSize: 26,
    marginTop: 10,
  },
  imgButton:{
    borderRadius: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  imgPost:{
    width: '100%',
    height: '100%',
    aspectRatio: 1.25,  
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
