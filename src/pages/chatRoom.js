import React from 'react'
import {View} from 'react-native'
import BoxMessage from '../components/messenger/boxMessage'
import BarMessage from '../components/messenger/barMessage'

const ChatRoom = () => {
    return(
        <View>
            <BarMessage />
            <BoxMessage />
        </View>
    )
}


export default ChatRoom