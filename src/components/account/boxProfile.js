import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import BoxInfo from "./components/boxInfo";
import UserList from "./components/userList";
import ListTag from "./components/ListTag";
import ContactButton from "./components/contactButton";
import AboutAcc from "./components/aboutAcc";
import Schema from "../../schema";
import {
  PrimaryContainer,
  SecondContainer,
  FontistoIcon,
  EntypoIcon,
} from "../../style/themeComponent";
import PostImage from "./components/postImage";
import PostMessage from "./components/postMessage";
import { useSelector } from "react-redux";

const BoxProfile = ({ id, navigation, user }) => {
  const theme = useSelector((state) => state.themeReducer.theme);
  const [postSegment, setPostSegment] = useState("photo");
  //All variable will be here
  //const user = Schema.data.user[parseInt(id)-1]
  //const user = Schema.getProfile(id);

  //listTag variable
  const { hobbies, favorites } = user;

  //authen
  //const isAuthUser = id === Schema.user;
  const isAuthUser = true

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
    borderBottomWidth: 5,
  };

  const controlViewProfile = (auth) => {
    if (auth) {
      return (
        <View style={styles.contact}>
          <ContactButton
            title={"Edit Profile"}
            handle={() => navigation.navigate("EditProfile")}
            iconName={"pencil-square-o"}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.contact}>
          <ContactButton
            title={"Add Friend"}
            handle={() => {}}
            iconName={"md-person-add"}
          />
          <ContactButton
            title={"Message"}
            handle={() => {}}
            iconName={"ios-chatbubbles"}
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
          navigation={navigation}
        />
        {controlViewProfile(isAuthUser)}
        <ListTag
          tag={hobbies}
          title={"Hobbies & interests Tag"}
          handle={() => navigation.navigate("AddTag")}
          isAuthUser={isAuthUser}
        />
        <ListTag
          tag={favorites}
          title={"Favorite Tag"}
          handle={() => navigation.navigate("AddTag")}
          isAuthUser={isAuthUser}
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
