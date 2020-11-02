import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import MainStyle from "../../style/mainStyle";
import Entypo from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/SimpleLineIcons";
import * as ImagePicker from 'expo-image-picker';
import Schema from "../../schema"
//import RNFetchBlob from "react-native-fetch-blob";

const ProfileHeader = ({ navigation }) => {
  //const image = require("../../../assets/man.png");
  const [ image, setImage ] = useState(require("../../../assets/man.png"))

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
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
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
  };

  const save = () =>{
    let formData = new FormData()
    formData.append("image", {uri: image, name: 'image124.jpg', type: 'image/jpeg'})
    //formData.append("product[images_attributes[0][file]]", {uri: image, name: 'image.jpg', type: 'image/jpeg'})
    console.log(formData)
    const url = Schema.url+"/image"
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: createFormData(image)
    })
    .then(response => {
    console.log("image uploaded")
    }).catch(err => {
      console.log(err)
    })  
  }

  return (
    <View style={styles.headerContainer}>
      <View style={styles.buttonSession}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.goBack()}
        >
          <Icons name="arrow-left" color="#fff" size={20} />
          <Text style={MainStyle.textWhiteBold}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          save()
          //navigation.navigate("MyAccount")
          }}>
          <Text style={MainStyle.textWhiteBold}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity>
          <Image style={styles.infoImgProfile} source={{uri: image.uri}} />
          <TouchableOpacity
            style={styles.changeProfileIcon}
            onPress={pickImage}
          >
            <Entypo name="camera" size={22} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#FF5350",
    flex: 1,
    padding: 20,
    paddingLeft: 15,
  },
  buttonSession: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    backgroundColor: "#FFF",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 50,
    borderColor: "#000",
    borderWidth: 2,
  },
});

export default ProfileHeader;
