import React from "react";
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

const screenWidth = Math.round(Dimensions.get("window").width);

const Notification = ({ navigation }) => {
  const theme = useSelector((state) => state.themeReducer.theme);
  const Data = [
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
  const renderItem = ({item}) =>{
    return(
      <TouchableOpacity style={[styles.notiItem, {backgroundColor: theme.secondBackground}]}>
        <View style={[MainStyle.shadow]}>
          <Image style={[styles.imgProfile]} source={{uri: item.userImg}}/>
        </View>
         <View style={{flex: 1, paddingLeft: 10 }}>
          <TextPrimary style={{fontSize: 16, fontWeight: "500"}}>{item.userName}</TextPrimary>
          <TextPrimary>{item.title}</TextPrimary>
         </View>   
      </TouchableOpacity>
    )
  }

  return (
    <PrimaryContainer style={MainStyle.mainBackground}>
      <Homebar navigation={navigation} title="Notification"/>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
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
