import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import MainStyle from '../../style/mainStyle'



const AboutAcc = ({describe}) => {
    return(
        <View style={styles.aboutMe}>
            <Text style={[MainStyle.textWhiteBold, { fontSize: 18 }]}>
                About Me
            </Text>
            <Text style={MainStyle.textWhite}>{describe}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    aboutMe: {
        marginVertical: 10,
        paddingHorizontal: 10,
    },
})

export default AboutAcc