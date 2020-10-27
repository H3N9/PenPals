import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MainStyle from "../../style/mainStyle";
import Schema from "../../schema";
import { SecondContainer, TextPrimary } from "../../style/themeComponent";

const Chat = ({ navigation, message_id, id_another }) => {
  const messages = Schema.data.text.filter(
    (value) => value.message === message_id
  );
  const lastMessage = messages.reduce((value_1, value_2) =>
    value_1.id > value_2.id ? value_1 : value_2
  );
  const minute = lastMessage.date.getMinutes();
  const hour = lastMessage.date.getHours();
  const day = lastMessage.date.getDate();
  const month = lastMessage.date.getMonth();
  const usernameAnother = Schema.data.user[id_another - 1].username;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ChatRoom", {
          texts: messages,
          usernameAnother: usernameAnother,
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
          <Text style={MainStyle.textGray}>{lastMessage.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 10,
  },
});

export default Chat;
