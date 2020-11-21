import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import BoxInfo from "./components/boxInfo";
import UserList from "./components/userList";
import ListTag from "./components/ListTag";
import ContactButton from "./components/contactButton";
import AboutAcc from "./components/aboutAcc";
import {
  PrimaryContainer,
  SecondContainer,
  FontistoIcon,
  EntypoIcon,
} from "../../style/themeComponent";
import RenderProfile from "./components/renderProfile";
import { useSelector } from "react-redux";
import path from '../../path'
import {postLoad, putLoad, getLoad} from '../../fetch'

const BoxProfile = ({ navigation, user, setUser }) => {

	const friendButtonHandle = (status) =>{
		console.log(status)
		if (status === "not friend")
		  return "Add Friend"
		else if (status === "friend request")
		  return "confirm"
		else
		  return status
	  }
  
	const [friendStatus, setFriendStatus] = useState(user.relationshipState) // จำลองสถานะเพื่อน
	const [friendButton, setFriendButton] = useState(friendButtonHandle(user.relationshipState))
	const [posts, setposts] = useState([])
	const authorize = useSelector((state) => state.Authorize.authorize)
	const { userId, token } = authorize
	const theme = useSelector((state) => state.themeReducer.theme);
	const [postSegment, setPostSegment] = useState("photo");
	const controller = new AbortController
	const signal = controller.signal
	//All variable will be here
	//const user = Schema.data.user[parseInt(id)-1]
	//const user = Schema.getProfile(id);

	//listTag variable
	const { id, hobbies, favorites } = user;

	//authen
	//const isAuthUser = id === Schema.user;
	const isAuthUser = userId == user.userId
	

	//userList variable
	const friendCount = user.friendCount;
	const intro = user.intro;

	//aboutAcc variable
	const describe = user.describe;

	useEffect(() => {
		if (!isAuthUser && user.relationshipState === 'not friend'){
			postLoad(navigation, authorize.token, path.urlProfileVisitors, { userId: user.userId }, ()=>{}, signal)
		}
		loadImage()
	}, [])

	const segmentBorder = {
		borderBottomColor: theme.textColor,
		borderBottomWidth: 3,
	};
	const chatRoom = () =>{
			const urlCreateChat = path.urlCreateChat
			const data = {userTwo: user.userId}
		postLoad(navigation, token, urlCreateChat, data, redirectChat, signal)
	}

	const redirectChat = (data) => {
			const room = data.id
			const texts = data.message
			navigation.navigate("ChatRoom", {
				initialTexts: texts,
				interlocutor: user,
				room:room,
				userId:userId
			})
	}

	
	
	const directFriend = () =>{
		navigation.navigate("FriendList", {
		authorize:authorize,
		profileId: id
		})
	}

	const friendHandle = () =>{
		if (friendStatus === "friend"){
		Alert.alert(
			"Unfriend!",
			"Are you sure to unfriend",
			[
			{
				text: "Cancel",
				onPress: () => console.log("Cancel Pressed"),
				style: "cancel"
			},
			{ text: "OK", onPress: () => {
				putLoad(authorize.token, path.urlSetRelationship, { friendId: id }, (a) =>{}, signal)
				setFriendStatus("not friend")
				setFriendButton(friendButtonHandle("not friend"))
			}}
			],
			{ cancelable: false }
		);
		}
		else{
		putLoad(authorize.token, path.urlSetRelationship, { friendId: id }, (a) =>{}, signal)
		if(friendStatus === "not friend"){
			setFriendStatus("request sent")
			setFriendButton(friendButtonHandle("request sent"))
		}
		else if(friendStatus === "friend request"){
			setFriendStatus("friend")
			setFriendButton(friendButtonHandle("friend"))
		}
		else if(friendStatus === "request sent"){
			setFriendStatus("not friend")
			setFriendButton(friendButtonHandle("not friend"))
		}
		else{
			setFriendStatus("not friend")
			setFriendButton(friendButtonHandle("not friend"))
		}
		}
	}

	const loadImage = () =>{
		const urlMyPost = path.urlPost+user.userId
		getLoad(navigation, token, urlMyPost, setposts, signal)
	}

	const refreshAfterDelete = () =>{
		const urlMyPost = path.urlPost+user.userId
		getLoad(navigation, token, urlMyPost, setposts, signal)
	}

		const controlViewProfile = (auth) => {
			if (auth) {
			return (
				<View style={styles.contact}>
				<ContactButton
					title={"Edit Profile"}
					handle={() => navigation.navigate("EditProfile", {user: user})}
					iconName={"account-edit"}
				/>
				</View>
			);
			} else {
			return (
				<View style={styles.contact}>
				<ContactButton
					title={"Add Friend"}
					handle={() => friendHandle()}
			iconName={"md-person-add"}
			friendStatus={friendButton}
				/>
				<ContactButton
					title={"Message"}
					handle={() => chatRoom()}
			iconName={"ios-chatbubbles"}
			friendStatus={friendStatus}
				/>
				</View>
			);
			}
	};

	const AccountDetailSection = () => {
		return (
		<React.Fragment>
			<BoxInfo userDetail={user} auth={isAuthUser} navigation={navigation} />
			<UserList
			friendCount={friendCount}
			intro={intro}
			navigation={directFriend}
			/>
			{controlViewProfile(isAuthUser)}
			<ListTag
			tag={hobbies}
			title={"Hobbies & interests Tag"}
			handle={() => navigation.navigate("AddTag", {
				pathUrl: path.urlHobbTag
			})}
			isAuthUser={isAuthUser}
			navigation={navigation}
			setUser={setUser}
			/>
			<ListTag
			tag={favorites}
			title={"Favorite Tag"}
			handle={() => navigation.navigate("AddTag", {
				pathUrl: path.urlFavTag
			})}
			isAuthUser={isAuthUser}
			navigation={navigation}
			setUser={setUser}
			/>
			<AboutAcc describe={describe} />
			<SecondContainer style={styles.segmentContainer}>
			<TouchableOpacity
				style={[
				styles.segmentItem,
				postSegment == "photo" ? segmentBorder : null,
				]}
				onPress={() => {
				setPostSegment("photo");
				}}
			>
				<FontistoIcon
				name={"photograph"}
				size={24}
				style={styles.segmentText}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={[
				styles.segmentItem,
				postSegment == "all" ? segmentBorder : null,
				]}
				onPress={() => setPostSegment("all")}
			>
				<EntypoIcon name={"text"} size={24} style={styles.segmentText} />
			</TouchableOpacity>
			</SecondContainer>
		</React.Fragment>
		);
	};

	return (
		<PrimaryContainer style={{ flex: 1 }}>
		<RenderProfile
			posts={posts}
			AccountDetailSection={AccountDetailSection}
			state={postSegment}
			refreshAfterDelete={refreshAfterDelete}
			/>
		</PrimaryContainer>
	);
};

const styles = StyleSheet.create({
  contact: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  segmentContainer: {
    flexDirection: "row",
  },
  segmentItem: {
    flex: 1,
  },
  segmentText: {
    textAlign: "center",
    padding: 10,
  },
});

export default BoxProfile;
