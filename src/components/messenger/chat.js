import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import MainStyle from "../../style/mainStyle";
import path from '../../path'
import { TextPrimary } from "../../style/themeComponent"
import {getLoad} from '../../fetch'
import { useIsFocused } from '@react-navigation/native'

const Chat = ({ navigation, lastMessage, id_interlocutor, texts, authorize, room }) => {

	const [interlocutor, setInterlocutor] = useState()
  	const url = path.urlSearchUser+id_interlocutor
	const isFocused = useIsFocused()

	useEffect(() => {
    	getLoad(navigation, authorize.token, url, setInterlocutor)
  	}, [isFocused])
  
	if(interlocutor){
		return(
			<Successed  navigation={navigation}
				texts={texts}
				lastMessage={lastMessage}
				interlocutor={interlocutor}
        		room={room}
        		userId={authorize.userId}/>
		)
	}
	else{
		return(
			<ActivityIndicator  />
		)
  }
  

  
};

const Successed = ({ navigation, lastMessage, interlocutor, texts, room, userId }) => {

	const date = new Date(lastMessage.createdAt)
	const minute = date.getMinutes();
	const hour = date.getHours();
	const day = date.getDate();
	const month = date.getMonth();
	const usernameAnother = interlocutor.username;

	return (
		<TouchableOpacity
		onPress={() =>
			navigation.navigate("ChatRoom", {
			initialTexts: texts,
			interlocutor: interlocutor,
			room:room,
			userId:userId
			})
		}
		>
		<View style={styles.chatContainer}>
			<View>
			<View style={MainStyle.shadow}>
				<Image
				style={[
					{
					width: 70,
					height: 70,
					borderRadius: 50,
					backgroundColor: "#323223",
					},
				]}
				source={require("../../../assets/man.png")}
				/>
				<View
				style={{
					width: 20,
					height: 20,
					backgroundColor: "green",
					position: "absolute",
					bottom: 0,
					right: -3,
					borderRadius: 50,
				}}
				/>
			</View>
			</View>
			<View style={{ flex: 1, marginHorizontal: 10 }}>
			<View
				style={{ flexDirection: "row", justifyContent: "space-between" }}
			>
				<TextPrimary style={MainStyle.textBold}>
				{usernameAnother}
				</TextPrimary>
				{ lastMessage.createdAt && <TextPrimary>
				{day}/{month} {hour}:{minute}
				</TextPrimary>}
			</View>
			<Text style={MainStyle.textGray}>{lastMessage.reply||""}</Text>
			</View>
		</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 10,
  },
});

export default Chat;
