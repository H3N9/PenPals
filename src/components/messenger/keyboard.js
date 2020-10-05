import React from "react";
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
  return (
    <View style={styles.box}>
      <View style={styles.boxIcon}>
        <TouchableOpacity>
          <Entypo
            name="camera"
            color="#fff"
            size={20}
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.boxIcon}>
        <TouchableOpacity>
          <Entypo
            name="image"
            color="#fff"
            size={20}
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.boxInput}>
        <TextInput
          style={styles.input}
          placeholder="Aa"
          placeholderTextColor="#898989"
        />
        <TouchableOpacity style={styles.sendButton}>
          <FontAwesome
            name="send"
            color="#ffb347"
            size={20}
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 50,
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
  },
  sendButton: {
    marginHorizontal: 15,
  },
});

export default Keyboard;
