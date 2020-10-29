import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import MainStyle from "../../style/mainStyle";
import Schema from "../../schema";
import { SecondContainer, TextPrimary } from "../../style/themeComponent";

const Chat = ({ navigation, lastMessage, id_interlocutor, texts, authorize }) => {

	const [interlocutor, setInterlocutor] = useState()
	const url = `http://localhost:3000/search/user/${id_interlocutor}`
	useEffect(() => {
		fetch(url, {
		method: 'GET',
		headers:{
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: authorize.token,
		}
		}).then( async (response) =>{
			if(response.status === 200){
				const data = await response.json()
				setInterlocutor(...data)
			}
			else if(response.status === 401){
				navigation.navigate("Login")
			}
		})
	}, [authorize])

	if(interlocutor){
		return(
			<Successed  navigation={navigation}
				texts={texts}
				lastMessage={lastMessage}
				interlocutor={interlocutor}/>
		)
	}
	else{
		return(
			<ActivityIndicator  />
		)
	}

  
};

const Successed = ({ navigation, lastMessage, interlocutor, texts }) => {

  const minute = "";
  const hour = "";
  const day = "";
  const month = "";
  const usernameAnother = interlocutor.username;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ChatRoom", {
          texts: texts,
          interlocutor: interlocutor,
        })
      }
    >
      <View style={styles.chatContainer}>
        <View>
          <View style={MainStyle.shadow}>
            <Image
              style={[
                {
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  backgroundColor: "#323223",
                },
              ]}
              source={require("../../../assets/man.png")}
            />
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: "green",
                position: "absolute",
                bottom: 0,
                right: -3,
                borderRadius: 50,
              }}
            />
          </View>
        </View>
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TextPrimary style={MainStyle.textBold}>
              {usernameAnother}
            </TextPrimary>
            <TextPrimary>
              {day}/{month} {hour}:{minute}
            </TextPrimary>
          </View>
          <Text style={MainStyle.textGray}>{lastMessage.reply||""}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 10,
  },
});

export default Chat;
