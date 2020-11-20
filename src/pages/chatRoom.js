import React, {useEffect, useState} from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import BoxMessage from "../components/messenger/boxMessage";
import BarMessage from "../components/messenger/barMessage";
import Keyboard from "../components/messenger/keyboard";
import MainStyle from "../style/mainStyle";
import { PrimaryContainer } from "../style/themeComponent";
import io from 'socket.io-client'
import path from '../path'
import {imageUpload} from '../fetch'



let socket

const ChatRoom = ({ navigation, route }) => {
	const { initialTexts, interlocutor, room, userId } = route.params;
	
	const [texts, setTexts] = useState()
	const [image, setImage] = useState(null)
	
	useEffect(() => {
		const urlSocket = path.urlSocket
		socket = io(urlSocket)
		socket.emit("roomChat", {userId, room})
		socket.on("offline", (msg) => {
			console.log(msg)
		})
		setTexts(initialTexts)
		return () =>{
			socket.disconnect()
			socket.off()
		}
	}, [socket])
	
	useEffect(() => { // Stack useState n**2 carefully
		socket.on('serverSend', (receiveText) =>{
			setTexts([receiveText, ...texts])
		})
	}, [texts])

	const keepImage = (image) => {
		const sendingText = {
			"reply":image,
			"type":"image",
			"userId":userId,
			"chatId":room
		}
		socket.emit('userSend', (sendingText))
		setImage(null)
	}

	const handleMyMessage = async (text) =>{
		if(text.length > 0 && image === null){
			const sendingText = {
				"reply":text,
				"type":"text",
				"userId":userId,
				"chatId":room
			}
			socket.emit('userSend', (sendingText))
		}
		else if(image !== null){
			imageUpload(image, keepImage)
		}
		
	}

	


	return (
		<PrimaryContainer style={MainStyle.mainBackground}>
			<View>
				<BarMessage interlocutor={interlocutor} navigation={navigation} />
			</View>
			<View style={styles.boxMess}>
				<BoxMessage texts={texts} userId={userId} />
			</View>
			<KeyboardAvoidingView
			behavior={Platform.OS == "ios" ? "padding" : "height"}
			keyboardVerticalOffset={Platform.OS == "ios" ? 20 : 0}
			>
			<View style={styles.keyboard}>
				<Keyboard onTextChange={handleMyMessage} setImage={setImage} />
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
