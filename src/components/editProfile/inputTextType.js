import React from "react";
import { View, StyleSheet } from "react-native";
import MainStyle from "../../style/mainStyle";
import { TextPrimary, InputText } from "../../style/themeComponent";

const InputTextType = ({ placeholder, value }) => {
  return (
    <View style={{ flex: 1 }}>
      <TextPrimary style={[MainStyle.textBold, { fontSize: 20 }]}>
        {placeholder}
      </TextPrimary>
      <InputText
        style={styles.textInput}
        placeholderTextColor="#777"
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    borderRadius: 5,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: "#777",
    marginHorizontal: 3,
  },
});

export default InputTextType;
