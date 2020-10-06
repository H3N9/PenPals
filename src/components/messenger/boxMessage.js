import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";
import Schema from "../../schema";
import MainStyle from "../../style/mainStyle";
const BoxMessage = ({ texts }) => {
  const username = Schema.user;

  const [messages, setMessage] = useState(texts);
  const EachMessage = ({ text, user }) => {
    if (user === username) {
      return (
        <TouchableOpacity style={styles.myMess}>
          <Text style={MainStyle.textWhite}>{text}</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={styles.anoMess}>
          <Text style={MainStyle.textWhite}>{text}</Text>
        </TouchableOpacity>
      );
    }
  };

  const renderMessage = ({ item }) => {
    return <EachMessage text={item.text} user={item.user} />;
  };

  return (
    <SafeAreaView style={styles.boxMess}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(messages) => messages.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  myMess: {
    backgroundColor: "#779ecb",
    padding: 10,
    alignSelf: "flex-end",
    flex: 1,
    borderRadius: 5,
    margin: 5,
  },
  anoMess: {
    backgroundColor: "#FF5350",
    padding: 10,
    alignSelf: "flex-start",
    borderRadius: 5,
    margin: 5,
  },
  boxMess: {
    backgroundColor: "#1a1a1a",
    flex: 10,
  },
});

export default BoxMessage;
