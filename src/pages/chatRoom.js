import React, {useState} from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import BoxMessage from "../components/messenger/boxMessage";
import BarMessage from "../components/messenger/barMessage";
import Keyboard from "../components/messenger/keyboard";
import MainStyle from "../style/mainStyle";
import { PrimaryContainer } from "../style/themeComponent";
import io from 'socket.io-client'



const ChatRoom = ({ navigation, route }) => {
  const { texts, interlocutor } = route.params;

  const urlSocket = "http://localhost:3000/"
  const socket = io(urlSocket)

  const [myText, setText] = useState("")

  const handleMyMessage = (text) =>{
    setText(value)
    socket.emit('message', value)
    socket.on('send message', (msg) =>{
      console.log(msg)
    })
  }

  return (
    <PrimaryContainer style={MainStyle.mainBackground}>
      <View>
        <BarMessage interlocutor={interlocutor} navigation={navigation} />
      </View>
      <View style={styles.boxMess}>
        <BoxMessage texts={texts} />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 20 : 0}
      >
        <View style={styles.keyboard}>
          <Keyboard onTextChange={handleMyMessage} />
        </View>
      </KeyboardAvoidingView>
    </PrimaryContainer>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  keyboard: {
    justifyContent: "flex-end",
  },
  boxMess: {
    flex: 1,
  },
});

export default ChatRoom;
