import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";
import MainStyle from "../../style/mainStyle";
import { PrimaryContainer } from "../../style/themeComponent";


const BoxMessage = ({ texts, userId }) => {
  const [messages, setMessage] = useState(texts);
  const EachMessage = ({ text, sender }) => {
    if (sender === userId) {
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
    return <EachMessage text={item.reply} sender={item.userId} />;
  };

  return (
    <PrimaryContainer style={styles.boxMess}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(messages) => messages.id.toString()}
      />
    </PrimaryContainer>
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
    flex: 10,
  },
});

export default BoxMessage;
