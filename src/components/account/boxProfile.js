import React from "react";
import { View, StyleSheet } from "react-native";
import BoxInfo from "./components/boxInfo";
import UserList from "./components/userList";
import ListTag from "./components/ListTag";
import ContactButton from "./components/contactButton";
import AboutAcc from "./components/aboutAcc";
import Schema from "../../schema";
import { PrimaryContainer } from "../../style/themeComponent";
import PostImage from './components/postImage'

const BoxProfile = ({ id, navigation }) => {

    //All variable will be here
    //const user = Schema.data.user[parseInt(id)-1]
    const user = Schema.getProfile(id);
    
    //listTag variable
    const { hobbies, favorites } = user;

    //authen
    const isAuthUser = id === Schema.user;

    //userList variable
    const friendCount = user.friend.length
    const intro = user.intro

    //aboutAcc variable
    const describe = user.describe;


    const images = [require('../../../assets/5.png'), require('../../../assets/5.png'), require('../../../assets/5.png'), require('../../../assets/5.png')]


    const controlViewProfile = (auth) =>{
        if(auth){
            return(
                <View style={styles.contact}>
                    <ContactButton
                        title={"Edit Profile"}
                        handle={() => navigation.navigate("EditProfile")}
                        iconName={"edit"}
                    />
                </View>
            )
        }
        else{
            return(
                <View style={styles.contact}>
                    <ContactButton
                        title={"Add Friend"}
                        handle={() => {}}
                        iconName={"add-user"}
                    />
                    <ContactButton
                        title={"Message"}
                        handle={() => {}}
                        iconName={"chat"}
                    />
                </View>
            )
        }
    }
    
    return (
        <PrimaryContainer>
            <BoxInfo userDetail={user} auth={isAuthUser} navigation={navigation} />
            <UserList friendCount={friendCount} intro={intro} />
            {controlViewProfile(isAuthUser)}
            <ListTag
                tag={hobbies}
                title={"Hobbies & interests Tag"}
                handle={() => navigation.navigate("AddTag")}
            />
            <ListTag
                tag={favorites}
                title={"Favorite Tag"}
                handle={() => navigation.navigate("AddTag")}
            />
            <AboutAcc describe={describe} />
            <PostImage images={images}/>
        </PrimaryContainer>
    );
};

const styles = StyleSheet.create({
  contact: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
});

export default BoxProfile;
