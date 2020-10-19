import React from 'react'
import {View, FlatList} from 'react-native'
import Post from '../friend/post'

const PostMessage = ({text}) =>{
    const renderText = (value, id) => {
        return {id:id, value:value, likePost: false, }
    }
    const posts = text.map(renderText)


    return(
        <View>
            <FlatList />
        </View>
    )
}


export default PostMessage