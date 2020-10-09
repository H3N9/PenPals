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
      <Text style={[MainStyle.textWhiteBold, { fontSize: 20, marginTop: 10 }]}>
        BirthDate
      </Text>
      <View style={[styles.inputChildContainer, { marginTop: 0 }]}>
        <InputSelectType placeholder="Day" />
        <InputSelectType placeholder="Month" />
        <InputSelectType placeholder="Year" />
      </View>
      {/* Gender Input */}
      <View style={styles.inputChildContainer}>
        <View style={{ flex: 0.5 }}>
          <Text style={[MainStyle.textWhiteBold, { fontSize: 20 }]}>
            Gender
          </Text>
          <InputSelectType placeholder="Gender" />
        </View>
      </View>

      {/* Nation & City Input */}
      <View style={styles.inputChildContainer}>
        <View style={{ flex: 1 }}>
          <Text style={[MainStyle.textWhiteBold, { fontSize: 20 }]}>
            Nation
          </Text>
          <InputSelectType placeholder="Nation" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[MainStyle.textWhiteBold, { fontSize: 20 }]}>City</Text>
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

export default InputProfile;
