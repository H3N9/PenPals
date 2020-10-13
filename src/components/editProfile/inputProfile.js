import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import MainStyle from "../../style/mainStyle";
import InputTextType from "./inputTextType";
import InputSelectType from "./inputSelectType";
import styled from "styled-components/native";
const InputProfile = () => {
  return (
    <View style={{ padding: 20 }}>
      {/* UsernameInput */}
      <View style={styles.inputChildContainer}>
        <InputTextType placeholder="Username" />
      </View>
      {/* Name & Lastname Input */}
      <View style={styles.inputChildContainer}>
        <InputTextType placeholder="Name" />
        <InputTextType placeholder="Lastname" />
      </View>

      {/* BirthDay Input */}
      <TextPrimary
        style={[MainStyle.textBold, { fontSize: 20, marginTop: 10 }]}
      >
        BirthDate
      </TextPrimary>
      <View style={[styles.inputChildContainer, { marginTop: 0 }]}>
        <InputSelectType placeholder="Day" />
        <InputSelectType placeholder="Month" />
        <InputSelectType placeholder="Year" />
      </View>
      {/* Gender Input */}
      <View style={styles.inputChildContainer}>
        <View style={{ flex: 0.5 }}>
          <TextPrimary style={[MainStyle.textBold, { fontSize: 20 }]}>
            Gender
          </TextPrimary>
          <InputSelectType placeholder="Gender" />
        </View>
      </View>

      {/* Nation & City Input */}
      <View style={styles.inputChildContainer}>
        <View style={{ flex: 1 }}>
          <TextPrimary style={[MainStyle.textBold, { fontSize: 20 }]}>
            Nation
          </TextPrimary>
          <InputSelectType placeholder="Nation" />
        </View>
        <View style={{ flex: 1 }}>
          <TextPrimary style={[MainStyle.textBold, { fontSize: 20 }]}>
            City
          </TextPrimary>
          <InputSelectType placeholder="City" />
        </View>
      </View>
      {/* introInput */}
      <View style={styles.inputChildContainer}>
        <InputTextType placeholder="Introquotes" />
      </View>
      {/* AboutInput */}
      <View style={styles.inputChildContainer}>
        <InputTextType placeholder="AboutMe" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputChildContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
});
const TextPrimary = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

export default InputProfile;
