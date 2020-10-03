import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'



const Keyboard = () => {
    return(
        <View style={styles.box}>
            <View style={styles.boxIcon}>
                <TouchableOpacity><Text>C</Text></TouchableOpacity>
            </View>
            <View style={styles.boxIcon}>
                <TouchableOpacity><Text>G</Text></TouchableOpacity>
            </View>
            <View style={styles.boxInput}>
                <TextInput style={styles.input} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        height: 20,
        flexDirection: 'row',
    },
    boxIcon:{
        flex: 1,
    },
    boxInput:{
        flex: 5,
    },
    input:{
        borderColor: '#ececec',
        borderWidth: 1,
        borderRadius: 10
    }
})


export default Keyboard