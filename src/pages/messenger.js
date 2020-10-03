import React from "react";
import { StyleSheet, View, ScrollView, FlatList, SafeAreaView } from "react-native";
import Homebar from "../components/homebar";
import Navbar from "../components/navbar";
import Chat from "../components/messenger/chat";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";
import Schema from '../schema'

const screenWidth = Math.round(Dimensions.get("window").width);

const Messenger = ({ navigation }) => {
    const user_id = Schema.user
    const messages = Schema.data.message.filter((value) => value.user.includes(user_id))

    const renderItem = ({item}) =>{
        const id_another = item.user.filter(value => value!=user_id)
        return <Chat navigation={navigation} message_id={item.id} id_another={id_another} />
    }

    return (
            <View style={MainStyle.mainBackground}>
                <Homebar navigation={navigation} />
                <SafeAreaView style={stylesCondition()}>
                    <FlatList data={messages} renderItem={renderItem} keyExtractor={messages => messages.id} />
                </SafeAreaView>
            <Navbar navigation={navigation} />
            </View>
    );
};

const stylesCondition = () => {
  if (screenWidth >= 768) {
    return { flex: 1, marginHorizontal: "20%" };
  } else {
    return { flex: 1 };
  }
};
export default Messenger;
