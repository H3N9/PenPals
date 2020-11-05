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
	const authorize = route.params.authorize
	const {userId, token} = authorize
	const isFocused = useIsFocused()
	const [friends, setFriends] = useState([])
	const [userFriends, setUserFriends] = useState([])
	const [friendFilter, setFriendFilter] = useState([]);
	const [text, setText] = useState("");
	const urlFriend = path.urlFriend
	const urlSearch = path.urlSearchUserId
	const base = []
	const controller = new AbortController
    const signal = controller.signal

	useEffect(() => {
		getLoad(navigation, token, urlFriend, setFriends, signal)
	}, [isFocused])
	
	useEffect(() => {
		friends.map((value) => {
			if(value.relationshipState === 'friend'){
				getLoad(navigation, token, urlSearch+value.id, loadUser, signal)
			}
		})
	}, [friends])

	const loadUser = (user) =>{
		base.push(user)
		setUserFriends(base)
		setFriendFilter(base)
	}

	const inputHandle = (value) => {
		setText(value);
		if (value.length === 0) {
		  setFriendFilter(userFriends);
		}
		const valueUpper = value.toUpperCase();
		const filteredData = userFriends.filter(
		  (itemValue) => itemValue.username.toUpperCase().indexOf(valueUpper) > -1
		);
		setFriendFilter(filteredData);
	};

	return (
		<PrimaryContainer style={[MainStyle.mainBackground, { paddingTop: 0 }]}>
		<FriendListHeader navigation={navigation} />
		<FriendListContent text={text} handleFilter={inputHandle} navigation={navigation} users={friendFilter} />
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
