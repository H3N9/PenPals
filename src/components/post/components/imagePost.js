import React from 'react'
import {View, Image, StyleSheet, Dimensions} from 'react-native'


const ImagePost = () =>{
    return(
        <View>
          <Image style={styles.image} source={require('../../../../assets/5.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        height: Dimensions.get('window').width-50,
        width: Dimensions.get('window').width,
        marginTop: 5
    }
})

export default ImagePost