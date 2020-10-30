import React, {useState} from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import BoxMessage from "../components/messenger/boxMessage";
import BarMessage from "../components/messenger/barMessage";
import Keyboard from "../components/messenger/keyboard";
import MainStyle from "../style/mainStyle";
import { PrimaryContainer } from "../style/themeComponent";
import io from 'socket.io-client'



const ChatRoom = ({ navigation, route }) => {
  
  const { initialTexts, interlocutor, room, userId } = route.params;

  const urlSocket = "http://localhost:3000/"
  const socket = io(urlSocket)
  socket.on('connected', msg => {
    console.log('You connected')
  })

  socket.emit("roomChat", {userId, room})

  const [texts, setTexts] = useState(initialTexts)

  const handleMyMessage = (text) =>{

    socket.emit('userSend', text)

  }

  socket.on('serverSend', (msg) =>{
    console.log(msg)
  })



  const handleBack = () => {
    socket.disconnect()
    navigation.goBack()
  }
  return (
    <PrimaryContainer style={MainStyle.mainBackground}>
        <View>
            <BarMessage interlocutor={interlocutor} navigation={handleBack} />
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
