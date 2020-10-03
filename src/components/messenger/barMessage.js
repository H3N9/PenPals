import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'



const BarMessage = ({navigation, usernameAnother }) => {
    const friendName = usernameAnother
    return(
        <View style={styles.box}>
            <View style={styles.btn}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Text>Back</Text></TouchableOpacity>
            </View>
            <View style={styles.boxText}>
                <Text>{friendName}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        flexDirection: 'column',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#ececec',
        height: 55,
    },
    btn:{
        alignSelf: 'flex-start',
    },
    boxText:{
        alignSelf: 'flex-end',
    }
})


export default BarMessage