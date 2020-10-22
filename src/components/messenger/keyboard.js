import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  SecondContainer,
  InputText,
  EntypoIcon,
} from "../../style/themeComponent";

const Keyboard = () => {
  const [chatText, setChatText] = useState("");
  return (
    <SecondContainer style={styles.box}>
      <View style={styles.boxIcon}>
        <TouchableOpacity>
          <EntypoIcon
            name="camera"
            color="#fff"
            size={22}
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.boxIcon}>
        <TouchableOpacity>
          <EntypoIcon
            name="image"
            color="#fff"
            size={22}
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.boxInput}>
        <InputText
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
    </SecondContainer>
  );
};

const styles = StyleSheet.create({
  box: {
    minHeight: 50,
    maxHeight: 120,
    flexDirection: "row",
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
    marginVertical: 5,
    flex: 1,
  },
  sendButton: {
    marginHorizontal: 15,
  },
});

export default Keyboard;
