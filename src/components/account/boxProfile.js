import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
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
import PostImage from "./components/postImage";
import { useSelector } from "react-redux";
import path from '../../path'
import {postLoad} from '../../fetch'

const BoxProfile = ({ navigation, user, setUser }) => {
  
  const [friendStatus, setFriendStatus] = useState("NotFriend") // จำลองสถานะเพื่อน
  
  const authorize = useSelector((state) => state.Authorize.authorize)
  const { userId, token } = authorize
  const theme = useSelector((state) => state.themeReducer.theme);
  const [postSegment, setPostSegment] = useState("photo");
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

  const images = [
    {
      uri:
        "https://i.pinimg.com/originals/47/74/40/477440f00ca76309345efe789515dc8f.jpg",
    },
    {
      uri: "http://linkinpedia.com/images/f/f2/Lithograph_HT20_Mike.jpg",
    },
    {
      uri:
        "https://storage.thaipost.net/main/uploads/photos/big/20200429/image_big_5ea90d5a96322.jpg",
    },
    require("../../../assets/5.png"),
  ];

  const segmentBorder = {
    borderBottomColor: theme.textColor,
    borderBottomWidth: 3,
  };
  const chatRoom = () =>{
    const controller = new AbortController
    const signal = controller.signal
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
    if(friendStatus === "NotFriend"){
      setFriendStatus("Requested")
      console.log(friendStatus)
    }
    else if(friendStatus === "Requested"){
      setFriendStatus("Friend")
      console.log(friendStatus)
    }
    else if(friendStatus === "Friend"){
      setFriendStatus("Confirm/Decline")
      console.log(friendStatus)
    }
    else{
      setFriendStatus("NotFriend")
      console.log(friendStatus)
    }
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
        friendStatus={friendStatus}
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
              postSegment == "text" ? segmentBorder : null,
            ]}
            onPress={() => setPostSegment("text")}
          >
            <EntypoIcon name={"text"} size={24} style={styles.segmentText} />
          </TouchableOpacity>
        </SecondContainer>
      </React.Fragment>
    );
  };

  return (
    <PrimaryContainer style={{ flex: 1 }}>
      {postSegment == "photo" ? (
        <PostImage
          images={images}
          AccountDetailSection={AccountDetailSection}
        />
      ) : (
        <PostImage
          images={images}
          AccountDetailSection={AccountDetailSection}
        />
      )}
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
