import React from 'react'
import { View, Image, StyleSheet } from 'react-native'


const Logo = () => {

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../../../assets/logo-dark.png")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex: 1,
        margin: 5
    },
    image:{
        width: 150,
        height: 50,
        resizeMode: 'cover'
    }
})

export default Logo