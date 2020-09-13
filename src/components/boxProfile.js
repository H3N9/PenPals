import React from 'react'
import {View, StyleSheet} from 'react-native'
import BoxInfo from './profile/boxInfo'

const BoxProfile = () =>{




    return(
        <View style={styles.main}>
            <View style={styles.boxDes} >
                <BoxInfo />
            </View>
            <View style={styles.boxFriend}>

            </View>
            <View style={styles.boxFollow}>

            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        flexDirection: 'column'
    },
    boxDes:{
        flex: 3
    },
    boxFriend:{
        flex: 1
    },
    boxFollow:{
        flex: 1
    }
})

export default BoxProfile