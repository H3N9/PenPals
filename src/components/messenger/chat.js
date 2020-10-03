import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MainStyle from '../../style/mainStyle'
import Schema from '../../schema'

const Chat = ({navigation, message_id, id_another}) => {
  const messages = Schema.data.text.filter((value) => value.message === message_id)
  const lastMessage = messages.reduce((value_1, value_2) => value_1.id>value_2.id? value_1:value_2)
  const minute = lastMessage.date.getMinutes()
  const hour = lastMessage.date.getHours()
  const day = lastMessage.date.getDate()
  const month = lastMessage.date.getMonth()
  const usernameAnother = Schema.data.user[id_another-1].username


  return (
    <TouchableOpacity onPress={() => navigation.navigate('ChatRoom', {texts:messages, usernameAnother:usernameAnother})}>
      <View style={styles.chatContainer}>
        <View>
            <Image style={{width: 70, height: 70, borderRadius: 50}} source={require('../../../assets/man.png')}/>
            <View style={{width: 20, height: 20, backgroundColor: "green", position: "absolute", bottom: 0, right: -3, borderRadius: 50}}/>
        </View>    
        <View style={{flex: 1, marginHorizontal: 10}}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={MainStyle.textBold}>{usernameAnother}</Text>
                <Text style={MainStyle.textWhite}>{day}/{month} {hour}:{minute}</Text>
            </View>
            <Text style={MainStyle.textGray}>{lastMessage.text}</Text>
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
