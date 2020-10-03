import React from 'react'
import {SafeAreaView, TouchableOpacity, FlatList, StyleSheet} from 'react-native'



const BoxMessage = () => {

    const username = "Pooh"
    const initMessage = [
        {
            id: '1',
            user: 'Pooh',
            date: new Date(),
            message: 'No?'
        },
        {
            id: '2',
            user: 'No',
            date: new Date(),
            message: 'YoungNo'
        }

    ]

    const [messages, setMessage] = useState(initMessage)

    const EachMessage = ({message, user}) =>{
        if(user === username){
            return(
                <TouchableOpacity style={styles.myMess}>
                    <Text>{message}</Text>
                </TouchableOpacity>
                
            )
        }
        else{
            return(
                <TouchableOpacity style={styles.anoMess}>
                    <Text>{message}</Text>
                </TouchableOpacity>
                
            )
        }
        
    }

    const renderMessage = (message) =>{
        return <EachMessage message={message.message} user={message.user} />
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
        alignSelf: 'flex-end'
    },
    anoMess:{
        backgroundColor: 'black',
        padding: 2,
        alignSelf: 'flex-start'
    },
    boxMess:{
        backgroundColor: 'white'
    }
})

export default BoxMessage