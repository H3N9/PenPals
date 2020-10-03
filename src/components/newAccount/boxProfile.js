import React, {useEffect} from "react"
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import BoxInfo from "./boxInfo"
import UserList from "./userList"
import ListTag from "./ListTag"
import ContactButton from "./contactButton"
import AboutAcc from "./aboutAcc";
import Schema from '../../schema'

const BoxProfile = ({ id }) => {

    //const user = Schema.data.user[parseInt(id)-1]
    const userId = Schema.user
    const user = Schema.getProfile(userId)
    const describe = user.describe
    const { hobbies, favorites } = user

    /*
            
            <ListTag tag={hobAndInterTag} title={"Hobbies & interests Tag"}/>
            <ListTag tag={favTag} title={"Favorite Tag"}/>*/

    return (
        <React.Fragment>
            <BoxInfo user={user}/>
            <UserList user={user} />
            <View style={styles.contact}>
                <ContactButton title={"Follow"} handle={() =>{}} />
                <ContactButton title={"Message"} handle={() =>{}} />
            </View>
            <ListTag tag={hobbies} title={"Hobbies & interests Tag"}/>
            <ListTag tag={favorites} title={"Favorite Tag"}/>
            <AboutAcc describe={describe} />
        </React.Fragment>
    )
    }

    const styles = StyleSheet.create({
        contact:{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 20,
        }
    })

export default BoxProfile;