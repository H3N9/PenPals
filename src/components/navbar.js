import React, { useState } from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native'


const Navbar = () =>{

    return (
        <View style={styles.navbar}>
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assets/navbar/friends.png')} style={styles.img}/>
                </TouchableOpacity>
            </View>
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assets/navbar/chat.png')} style={styles.img}/>
                </TouchableOpacity>
            </View>
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assets/navbar/notification.png')} style={styles.img}/>
                </TouchableOpacity>
            </View>
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assets/navbar/account.png')} style={styles.img}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar:{
        backgroundColor: "#1a396e",
        flexDirection: 'row',
        height: 55,
    },
    menuContainer:{
        flex: 1, 
    },
    button:{
        alignItems: 'center',
        flex:1,
        justifyContent: 'center',  
    },
    img:{
        width: 30,
        height: 30,
        resizeMode: 'cover',
    }
})

export default Navbar