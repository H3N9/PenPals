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
const TextProfile = () => {
  return (
    <View style={{ padding: 20 }}>
      {/* UsernameInput */}
      <View style={styles.inputChildContainer}>
        <View style={{ flex: 1 }}>
          <Text style={[MainStyle.textWhiteBold, { fontSize: 20 }]}>
            Username
          </Text>
          <TextInput style={styles.textInput} placeholder="Username" />
        </View>
      </View>
      {/* Name & Lastname Input */}
      <View style={styles.inputChildContainer}>
        <View style={{ flex: 1 }}>
          <Text style={[MainStyle.textWhiteBold, { fontSize: 20 }]}>Name</Text>
          <TextInput style={styles.textInput} placeholder="Name" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[MainStyle.textWhiteBold, { fontSize: 20 }]}>
            Lastname
          </Text>
          <TextInput style={styles.textInput} placeholder="Last name" />
        </View>
      </View>

      {/* BirthDay Input */}
      <Text style={[MainStyle.textWhiteBold, { fontSize: 20, marginTop: 10 }]}>
        BirthDate
      </Text>
      <View style={[styles.inputChildContainer, { marginTop: 0 }]}>
        <View style={{ flex: 1 }}>
          <TextInput style={styles.textInput} placeholder="Day" />
        </View>
        <View style={{ flex: 1 }}>
          <TextInput style={styles.textInput} placeholder="Month" />
        </View>
        <View style={{ flex: 1 }}>
          <TextInput style={styles.textInput} placeholder="Year" />
        </View>
      </View>
      {/* Gender Input */}
      <View style={styles.inputChildContainer}>
        <View style={{ flex: 0.5 }}>
          <Text style={[MainStyle.textWhiteBold, { fontSize: 20 }]}>
            Gender
          </Text>
          <TextInput style={styles.textInput} placeholder="Gender" />
        </View>
      </View>
      {/* Nation & City Input */}
      <View style={styles.inputChildContainer}>
        <View style={{ flex: 1 }}>
          <Text style={[MainStyle.textWhiteBold, { fontSize: 20 }]}>
            Nation
          </Text>
          <TextInput style={styles.textInput} placeholder="Nation" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[MainStyle.textWhiteBold, { fontSize: 20 }]}>City</Text>
          <TextInput style={styles.textInput} placeholder="City" />
        </View>
      </View>
      {/* introInput */}
      <View style={styles.inputChildContainer}>
        <View style={{ flex: 1 }}>
          <Text style={[MainStyle.textWhiteBold, { fontSize: 20 }]}>
            Introquotes
          </Text>
          <TextInput style={styles.textInput} placeholder="Introquotes" />
        </View>
      </View>
      {/* AboutInput */}
      <View style={styles.inputChildContainer}>
        <View style={{ flex: 1 }}>
          <Text style={[MainStyle.textWhiteBold, { fontSize: 20 }]}>
            AboutMe
          </Text>
          <TextInput style={styles.textInput} placeholder="AboutMe" />
        </View>
      </View>
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
  inputChildContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
});

export default TextProfile;
