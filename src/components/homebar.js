import React from 'react'
import {StyleSheet, View, Dimensions, Text, TouchableOpacity, Image} from 'react-native'

const height = Math.round(Dimensions.get('window').height)
const width = Math.round(Dimensions.get('window').width)

const Homebar = () =>{
    return (
            <View style={styles.homebar}>
                <View style={styles.boxLogo}>
                <Image source={require("../../assets/logo.png")} style={styles.image}/>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../../assets/navbar/notification.png')} style={styles.img}/>
                    </TouchableOpacity>
                </View>
                
            </View>
    )
}

const styles = StyleSheet.create({

    homebar: {
        flexDirection: 'row',
        flex:1,
        padding: 20,
    },
    box: {
        flex: 2,
        justifyContent: 'center',
    },
    boxLogo:{
        flex: 3,
        justifyContent: 'center',
        paddingRight: 50
    },
    button:{
        alignItems: 'center',
        flex:1,
        justifyContent: 'center',
    },
    textButton: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 25
    },
    image:{
        resizeMode: "cover",
        height: 30, 
        width: 100,
    },
    img:{
        width: 30,
        height: 30,
        resizeMode: 'cover',
    }
})

export default Homebar