import React from 'react'
import { View, Image, StyleSheet } from 'react-native'


const Logo = () => {

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../../../assets/logo_l.png")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        margin: 5
    },
    image:{
        width: 180,
        height: 80,
        resizeMode: 'contain'
    }
})

export default Logo