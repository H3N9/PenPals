import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import MainStyle from "../../style/mainStyle";

const InputTextType = ({ placeholder }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={[MainStyle.textWhiteBold, { fontSize: 20 }]}>
        {placeholder}
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    borderRadius: 5,
    color: "#fff",
    padding: 5,
    borderBottomWidth: 1,
    borderColor: "#777",
    marginHorizontal: 3,
  },
});

export default InputTextType;
