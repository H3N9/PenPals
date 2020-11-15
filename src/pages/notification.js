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
  const initData = [
    {
      id: "1",
      userImg: "https://resources.premierleague.com/premierleague/photos/players/250x250/p37605.png",
      userName: "Mesut Ozil",
      title: "ส่งคำขอเป็นเพื่อนกับคุณ"
    },
    {
      id: "2",
      userImg: "https://resources.premierleague.com/premierleague/photos/players/250x250/p37605.png",
      userName: "Mesut Ozil",
      title: "ส่งคำขอเป็นเพื่อนกับคุณ"
    },
    {
      id: "3",
      userImg: "https://resources.premierleague.com/premierleague/photos/players/250x250/p37605.png",
      userName: "Mesut Ozil",
      title: "ส่งคำขอเป็นเพื่อนกับคุณ"
    },
  ]

  const redirectToAccountPage = (user) =>{
    navigation.navigate("Account", { user: user })
  }

  useEffect(() =>{
    getLoad(navigation, authorize.token, path.urlNotification, setMessage, signal)
  }, [])

  const renderItem = ({item}) =>{
    return(
      <TouchableOpacity style={[styles.notiItem, {backgroundColor: theme.secondBackground}]}
      onPress={() => {getLoad(navigation, authorize.token, path.urlSearchUser+item.sender.profileId, redirectToAccountPage, signal)}}
      >
        <View style={[MainStyle.shadow]}>
          <Image style={[styles.imgProfile]} source={{uri: path.urlImage+item.sender.imageProfile}}/>
        </View>
         <View style={{flex: 1, paddingLeft: 10 }}>
          <TextPrimary style={{fontSize: 16, fontWeight: "500"}}>{item.sender.firstName} {item.sender.lastName}</TextPrimary>
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
          data={message}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
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
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.35,
    elevation: 0

  }
})

export default Notification;
