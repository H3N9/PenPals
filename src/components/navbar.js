import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'


const Navbar = () =>{
    return (
        <View style={styles.navbar}>
            <View style={styles.boxContent}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Friend</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boxContent}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Messenger</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boxContent}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Notification</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boxContent}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar:{
        backgroundColor: "#1a396e",
        flexDirection: 'row',
        height: 60
    },
    boxContent:{
        backgroundColor: '#1a396e',
        flex: 1,  
    },
    button:{
        alignItems: 'center',
        flex:1,
        justifyContent: 'center',
    },
    textButton: {
        color: "#FFF"
    }
})

export default Navbar