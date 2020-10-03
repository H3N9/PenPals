import React from 'react'
import {View, Text, StyleSheet} from 'react-native'



const BarMessage = () => {
    const friendName = "YoungNo"
    return(
        <View style={styles.box}>
            <View style={styles.btn}>
                <TouchableOpacity><Text>Back</Text></TouchableOpacity>
            </View>
            <View style={styles.boxText}>
                <Text>{friendName}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ececec',
        height: 77,
    },
    btn:{
        textAlign: 'center',
        alignSelf: 'flex-start'
    },
    boxText:{
        alignSelf: 'center',
    }
})


export default BarMessage