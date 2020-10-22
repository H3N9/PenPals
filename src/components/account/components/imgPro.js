import React from 'react'
import {StyleSheet, Image, TouchableOpacity} from 'react-native'


const ImgPro = () => {
    const image = require('../../../../assets/man.png')
    return (
        <TouchableOpacity>
            <Image style={styles.infoImgProfile} source={image}/>
        </TouchableOpacity>    
    )
}

const styles = StyleSheet.create({
    infoImgProfile: {
        width: 60,
        height: 60,
        backgroundColor: "#CCC",
        borderRadius: 100,
      },
})


export default ImgPro