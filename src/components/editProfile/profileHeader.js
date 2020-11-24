import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image, Platform } from "react-native";
import MainStyle from "../../style/mainStyle";
import Entypo from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import * as ImagePicker from 'expo-image-picker';
import path from "../../path"
import {useSelector} from 'react-redux'
import { putLoad } from '../../fetch'
//import RNFetchBlob from "react-native-fetch-blob";

const ProfileHeader = ({ navigation, setNewDetail, newDetail }) => {
  //const image = require("../../../assets/man.png");
  const [isChangeImage, setIsChangeImage] = useState(false)
  const authorize = useSelector((state) => state.Authorize.authorize)
  const theme = useSelector((state) => state.themeReducer.theme);
  const [ image, setImage ] = useState({ uri: path.urlImage+newDetail.image })
  const [ upload, setUpload ] = useState(0)
  const [ response, setResponse ] = useState('No')
  

  const saveEdit = () => {
    console.log(newDetail);
  };

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
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setIsChangeImage(true)
      setImage(result);
    }
  };

  const createFormData = (photo, body) => {
    const data = new FormData();
  
    data.append("photo", {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    });
  
    // Object.keys(body).forEach(key => {
    //   data.append(key, body[key]);
    // });
  
    return data;
  }

  const handleProgress = (event) =>{
    setUpload(Math.round((event.loaded+100)/event.total))
  }

  const putUpdate = (token, url, body) =>{
    fetch(url, {
      method: 'PUT',
      headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: token,
      },
      body: JSON.stringify(body)
    })
    .then( async (response) =>{
      if(response.status === 200){
        const json = await response.json()
        navigation.navigate("MyAccount")
      }
    })
  }

  const redirectAccount = (status, data) =>{
    if (status === 200){
      navigation.navigate("MyAccount")
    }
  }

  const save = () =>{
    const xhr = new XMLHttpRequest()
    let formData = new FormData()
    formData.append("image", {uri: image.uri, name: 'image.jpg', type: 'image/jpeg'})
    //formData.append("product[images_attributes[0][file]]", {uri: image, name: 'image.jpg', type: 'image/jpeg'})
    xhr.upload.addEventListener('progress', handleProgress)
    xhr.addEventListener('load', () =>{
      setUpload(100)
      setResponse(xhr.response)
    })
    const url = path.urlImage
    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE){
        newDetail.image = xhr.response.filename
        const controller = new AbortController
        const signal = controller.signal
        putLoad(authorize.token, path.urlUpdateProfile, {...newDetail}, redirectAccount, signal)
        //putUpdate(authorize.token, path.urlUpdateProfile, newDetail)
      }
    }
    xhr.open('POST', url)
    xhr.responseType = 'json'
    xhr.send(formData)
    // fetch(url, {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   body: createFormData(image)
    // })
    // .then(response => {
    // console.log("image uploaded")
    // }).catch(err => {
    //   console.log(err)
    // })  
  }
  return (
    <View style={styles.headerContainer}>
      <View style={styles.buttonSession}>
        <TouchableOpacity
          style={[styles.backButton, {backgroundColor: theme.mode === "dark" ? "rgba(200, 200, 200, 0.3)" : "rgba(0,0,0,0.7)"}]}
          onPress={() => navigation.goBack()}
        >
          <Icons name="chevron-left" color="#fff" size={21} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          //saveEdit()
          if (isChangeImage){
            save()
          }
          else{
            //putUpdate(authorize.token, path.urlUpdateProfile, newDetail)
            //console.log(newDetail)
            putLoad(authorize.token, path.urlUpdateProfile, newDetail, redirectAccount)
          }
          //navigation.navigate("MyAccount")
          }}  style={[styles.backButton, {backgroundColor: theme.mode === "dark" ? "rgba(200, 200, 200, 0.3)" : "rgba(0,0,0,0.7)"}]}>
          <AntDesign name="save" color="#fff" size={21} />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity>
          <Image style={styles.infoImgProfile} source={{uri: image.uri}} />
          <TouchableOpacity
            style={styles.changeProfileIcon}
            onPress={pickImage}
          >
            <Entypo name="camera" size={21} color="#fff" />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    padding: 20,
  },
  buttonSession: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoImgProfile: {
    width: 100,
    height: 100,
    backgroundColor: "#555",
    borderRadius: 100,
  },
  changeProfileIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    borderRadius: 50,
    padding: 5,
    borderColor: "#000",
    borderWidth: 0.6,
  },
  backButton: {
    
    width: 39,
    height: 39,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileHeader;
