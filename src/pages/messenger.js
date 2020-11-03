import React, {useEffect, useState} from "react";
import { FlatList, SafeAreaView } from "react-native";
import Homebar from "../components/homebar";
import Chat from "../components/messenger/chat";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";
import { PrimaryContainer } from "../style/themeComponent";
import {useSelector} from 'react-redux'
import path from '../path'
import {getLoad} from '../fetch'
import { useIsFocused } from '@react-navigation/native';

const screenWidth = Math.round(Dimensions.get("window").width);

const Messenger = ({ navigation }) => {
		
	const [messages, setMessages] = useState("")
	const authorize = useSelector((state) => state.Authorize.authorize)
	const {token} = authorize
	const url = path.urlMessage
	const isFocused = useIsFocused();

	useEffect(() => {
		getLoad(navigation, token, url, setMessages)
	}, [isFocused])


	const renderItem = ({ item }) => {
		return (
		<Chat
			navigation={navigation}
			texts={item.message}
			lastMessage={item.lastMessage}
			id_interlocutor={item.interlocutor}
			authorize={authorize}
			room={item.id}
		/>
		);
	};
	return (
		<PrimaryContainer style={MainStyle.mainBackground}>
		<Homebar navigation={navigation} />
		<SafeAreaView style={stylesCondition()}>
			<FlatList
			data={messages}
			renderItem={renderItem}
			keyExtractor={(messages) => messages.id.toString()}
			/>
		</SafeAreaView>
		</PrimaryContainer>
	)
}

const stylesCondition = () => {
  if (screenWidth >= 768) {
    return { flex: 1, marginHorizontal: "20%" };
  } else {
    return { flex: 1 };
  }
};

export default Messenger;
