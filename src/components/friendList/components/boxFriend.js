import React from 'react'
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native'
import { TextPrimary } from "../../../style/themeComponent";
import MainStyle from "../../../style/mainStyle";
import path from '../../../path'


const BoxFriend = ({user, navigation}) => {

    const {username, image} = user
    return (
        <View style={styles.friendContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Account", {user:user})} style={MainStyle.shadow}>
          <Image source={{ uri: path.urlImage+image }} style={styles.imgProfile} />
        </TouchableOpacity>
        <TextPrimary style={styles.username}>{username}</TextPrimary>
      </View>
    )
}

const styles = StyleSheet.create({
    friendContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 2,
        padding: 10,
        justifyContent: "space-between",
      },
      imgProfile: {
        width: 67,
        height: 67,
        backgroundColor: "#FFF",
        borderRadius: 100,
      },
      username: {
        fontWeight: "500",
        fontSize: 16,
        paddingHorizontal: 10,
        flex: 1,
      },
      unfriendButton: {
        backgroundColor: "#ff3239",
        padding: 5,
        borderRadius: 5,
      },
})

export default BoxFriend