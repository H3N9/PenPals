import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MainStyle from '../../style/mainStyle'

const Chat = () => {
  return (
    <TouchableOpacity>
      <View style={styles.chatContainer}>
        <View>
            <Image style={{width: 70, height: 70, borderRadius: 50}} source={require('../../../assets/man.png')}/>
            <View style={{width: 20, height: 20, backgroundColor: "green", position: "absolute", bottom: 0, right: -3, borderRadius: 50}}/>
        </View>    
        <View style={{flex: 1, marginHorizontal: 10}}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={MainStyle.textBold}>Username</Text>
                <Text style={MainStyle.textWhite}>9.30</Text>
            </View>
            <Text style={MainStyle.textGray}>Lorem Ipsum is simply dummy text of the printing </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    chatContainer:{
        flexDirection: "row",
        marginHorizontal: 15,
        marginTop: 10
    },
  })
export default Chat;
