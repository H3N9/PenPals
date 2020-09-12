import React from 'react'
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native'
import {useRoute} from '@react-navigation/native'

const Navbar = ({ navigation }) =>{
    const routeName = useRoute().name
    return (
        <View style={styles.navbar}>
            <View style={stylesCondition(routeName, "Home")}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../../assets/navbar/friends.png')} style={styles.img}/>
                </TouchableOpacity>
            </View>
            <View style={stylesCondition(routeName, "Search")}>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assets/navbar/chat.png')} style={styles.img}/>
                </TouchableOpacity>
            </View>
            <View style={stylesCondition(routeName, "Message")}>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assets/navbar/notification.png')} style={styles.img}/>
                </TouchableOpacity>
            </View>
            <View style={stylesCondition(routeName, "Account")}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Account')}>
                    <Image source={require('../../assets/navbar/account.png')} style={styles.img}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar:{
        backgroundColor: "#1a396e",
        flex: 4,
        flexDirection: 'row',
        flex: 1,
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
    img:{
        width: 30,
        height: 30,
        resizeMode: 'cover',
    }
})

const stylesCondition = (routeName, name) => {
    if(routeName === name){
        return {borderTopWidth: 5, borderColor: 'red', backgroundColor: '#1a396e', flex: 1,}
    }
    return {borderTopWidth: 5, borderColor: '#1a396e', backgroundColor: '#1a396e', flex: 1,}
}

export default Navbar