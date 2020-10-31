import React, {useEffect, useState} from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import BoxMessage from "../components/messenger/boxMessage";
import BarMessage from "../components/messenger/barMessage";
import Keyboard from "../components/messenger/keyboard";
import MainStyle from "../style/mainStyle";
import { PrimaryContainer } from "../style/themeComponent";
import io from 'socket.io-client'
import path from '../path'

const urlSocket = path.urlSocket
const socket = io(urlSocket)


const ChatRoom = ({ navigation, route }) => {
	const { initialTexts, interlocutor, room, userId } = route.params;
	const [texts, setTexts] = useState(initialTexts)

	
	
	useEffect(() => {
		socket.emit("roomChat", {userId, room})
	}, [])
	
	useEffect(() => {
		socket.on('serverSend', (receiveText) =>{
			setTexts([...texts, receiveText])
			console.log(texts)
		})
	}, [socket])

	

	const handleMyMessage = (text) =>{
		const sendingText = {
		"reply":text,
		"type":"text",
		"userId":userId,
		"chatId":room
		}
		
		socket.emit('userSend', (sendingText))

	}

	



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
				<BoxMessage texts={texts} userId={userId} />
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
