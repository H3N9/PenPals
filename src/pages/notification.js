import React, {useEffect, useState} from "react";
import { View, SafeAreaView, FlatList, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import Homebar from "../components/homebar";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";
import { useSelector } from "react-redux";
import {
  TextPrimary,
  SecondContainer,
  InputText,
  PrimaryContainer,
  EntypoIcon
} from "../style/themeComponent";
import path from "../path"
import { getLoad } from "../fetch"


const screenWidth = Math.round(Dimensions.get("window").width);

const Notification = ({ navigation }) => {
  const theme = useSelector((state) => state.themeReducer.theme);
  const controller = new AbortController
  const signal = controller.signal
  const authorize = useSelector((state) => state.Authorize.authorize)
  const [message, setMessage] = useState([])
  const [refresh, setRefresh] = useState(false)

  const redirectToAccountPage = (user) =>{
    navigation.navigate("Account", { user: user })
  }

  //สำหรับการ Refresh หน้า
  const notiRefresh = (info) =>{
    setMessage(info)
    setRefresh(false)   
  }
  const refreshHandle = async() =>{
    setRefresh(true)
    getLoad(navigation, authorize.token, path.urlNotification, notiRefresh, signal)
  }

  const setMessageReverse = (arrObj) =>{

  }

  useEffect(() =>{
    getLoad(navigation, authorize.token, path.urlNotification, setMessage, signal)
  }, [])

  const renderItem = ({item}) =>{
    return(
      <TouchableOpacity style={[styles.notiItem, {backgroundColor: theme.primaryBackground}]}
      onPress={() => {getLoad(navigation, authorize.token, path.urlSearchUser+item.sender.userId, redirectToAccountPage, signal)}}
      >
        <View style={[MainStyle.shadow]}>
          <Image style={[styles.imgProfile]} source={{uri: path.urlImage+item.sender.imageProfile}}/>
        </View>
         <View style={{flex: 1, paddingLeft: 10 }}>
          <TextPrimary style={{fontSize: 16, fontWeight: "600"}}>{item.sender.firstName} {item.sender.lastName}</TextPrimary>
          <TextPrimary>{item.type}</TextPrimary>
         </View>   
      </TouchableOpacity>
    )
  }

  return (
    <PrimaryContainer style={MainStyle.mainBackground}>
      <Homebar navigation={navigation} title="Notification"/>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={message.reverse()}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          refreshing={refresh}
          onRefresh={refreshHandle}
        />
      </SafeAreaView>
    </PrimaryContainer>
  );
};

const styles = StyleSheet.create({
  imgProfile:{
    width: 70,
    height: 70,
    borderRadius: 50,

  },
  notiItem:{
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    paddingHorizontal: 15,
    paddingVertical: 7,
  }
})

export default Notification;
