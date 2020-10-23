import React, {useEffect, useState} from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import BoxInfo from "./components/boxInfo";
import UserList from "./components/userList";
import ListTag from "./components/ListTag";
import ContactButton from "./components/contactButton";
import AboutAcc from "./components/aboutAcc";
import Schema from "../../schema";
import { PrimaryContainer } from "../../style/themeComponent";
import PostImage from './components/postImage'
import {useSelector} from 'react-redux'

const BoxProfile = ({ id, navigation }) => {
    const [user, setUser] = useState()
    const authorize = useSelector((state) => state.Authorize.authorize)
    const {userId, token} = authorize
    const url = `http://localhost:3000/search/user/${id}`
    useEffect(() => {
        fetch(url,{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: token,
              },
        })
        .then( async (res) => {
                if(res.status === 200){
                    const data = await res.json()
                    setUser(...data)
                }
                else if(res.status === 401){
                    navigation.navigate("Login")
                }
            }
        )
        .catch(err => "Mute")
    }, [id])

    if(user){
        return <Success user={user} userId={userId} navigation={navigation} />
    }
    else{
        return <ActivityIndicator />
    }
    
    
};

const Success = ({user, userId, navigation}) => {
    //listTag variable
    const { hobbies, favorites } = user;

    //auth
    const isAuthUser = user.userId === userId;

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
}

const styles = StyleSheet.create({
  contact: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
});

export default BoxProfile;
