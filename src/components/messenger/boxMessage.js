import React, {useState} from 'react'
import {SafeAreaView, TouchableOpacity, FlatList, StyleSheet, Text} from 'react-native'
import Schema from '../../schema'


const BoxMessage = ({texts}) => {

    const username = Schema.user

    const [messages, setMessage] = useState(texts)
    const EachMessage = ({text, user}) =>{
        if(user === username){
            return(
                <TouchableOpacity style={styles.myMess}>
                    <Text>{text}</Text>
                </TouchableOpacity>
                
            )
        }
        else{
            return(
                <TouchableOpacity style={styles.anoMess}>
                    <Text>{text}</Text>
                </TouchableOpacity>
                
            )
        }
        
    }

    const renderMessage = ({item}) =>{
        return <EachMessage text={item.text} user={item.user} />
    }




    return(
        <SafeAreaView style={styles.boxMess}>
            <FlatList data={messages} renderItem={renderMessage} keyExtractor={messages => messages.id} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    myMess:{
        backgroundColor: 'blue',
        padding: 2,
        alignSelf: 'flex-end',
        flex: 1,
    },
    anoMess:{
        backgroundColor: 'red',
        padding: 2,
        alignSelf: 'flex-start'
    },
    boxMess:{
        backgroundColor: 'white'
    }
})

export default BoxMessage