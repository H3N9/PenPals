import React, { useEffect, useRef, useState } from "react";
import { View, ScrollView } from "react-native";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";
import { PrimaryContainer } from "../style/themeComponent";
import { useIsFocused } from '@react-navigation/native';
import FriendListHeader from "../components/friendList/friendListHeader";
import FriendListContent from "../components/friendList/friendListContent";
import {getLoad} from '../fetch'
import path from '../path'

const screenWidth = Math.round(Dimensions.get("window").width);

const FriendList = ({ route, navigation }) => {
	const authroize = route.params.authroize
	const {userId, token} = authroize
	const isFocused = useIsFocused()
	const counter = useRef(0)
	const [friends, setFriends] = useState([])
	const url = path.urlFriend

	useEffect(() => {
		getLoad(navigation, token, url, setFriends)
	}, [counter%10 === 0])
	



	return (
		<PrimaryContainer style={[MainStyle.mainBackground, { paddingTop: 0 }]}>
		<FriendListHeader navigation={navigation} />
		<FriendListContent navigation={navigation} />
		</PrimaryContainer>
	);
};

const stylesCondition = () => {
  if (screenWidth >= 768) {
    return { flex: 1, marginHorizontal: "20%" };
  } else {
    return { flex: 1 };
  }
};

export default FriendList;
