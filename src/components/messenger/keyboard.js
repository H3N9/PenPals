import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import MainStyle from "../../style/mainStyle";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Keyboard = () => {
  const [chatText, setChatText] = useState("");
  return (
    <View style={styles.box}>
      <View style={styles.boxIcon}>
        <TouchableOpacity>
          <Entypo
            name="camera"
            color="#fff"
            size={22}
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.boxIcon}>
        <TouchableOpacity>
          <Entypo
            name="image"
            color="#fff"
            size={22}
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.boxInput}>
        <TextInput
          multiline
          style={styles.input}
          placeholder="Aa"
          placeholderTextColor="#898989"
          onChangeText={(value) => setChatText(value)}
          value={chatText}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => setChatText("")}
        >
          <FontAwesome
            name="send"
            color="#ffb347"
            size={24}
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    minHeight: 50,
    maxHeight: 120,
    flexDirection: "row",
    backgroundColor: "#323232",
    alignItems: "center",
  },
  boxIcon: {
    flex: 1,
  },
  boxInput: {
    flex: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderColor: "#898989",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 5,
    flex: 1,
    color: "#fff",
  },
  sendButton: {
    marginHorizontal: 15,
  },
});

export default Keyboard;
