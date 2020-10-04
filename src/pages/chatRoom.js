import React from 'react'
import {View, StyleSheet} from 'react-native'
import BoxMessage from '../components/messenger/boxMessage'
import BarMessage from '../components/messenger/barMessage'
import Keyboard from '../components/messenger/keyboard'

const ChatRoom = ({navigation, route}) => {
    const texts = route.params.texts
    const usernameAnother = route.params.usernameAnother
    return(
        <View style={styles.box}>
            <View>
                <BarMessage usernameAnother={usernameAnother} navigation={navigation}/>
            </View>
            <View style={styles.boxMess}>
                <BoxMessage texts={texts} />
            </View>
            <View style={styles.keyboard}>
                <Keyboard />
            </View>  
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        flex:1,
    },
    keyboard:{
        justifyContent: 'flex-end',
        flex:1,
    },
    boxMess:{
        flex: 1,
    }
})


export default ChatRoom