import React from "react";
import { View, StyleSheet } from "react-native";
import MainStyle from "../../style/mainStyle";
import InputTextType from "./inputTextType";
import InputSelectType from "./inputSelectType";
import { TextPrimary } from "../../style/themeComponent";

const InputProfile = ({navigation, user}) => {
  const {username, gender, firstName, lastName, age, city, nation, intro, describe} = user
  return (
    <View style={{ padding: 20 }}>
      {/* UsernameInput */}
      <View style={styles.inputChildContainer}>
        <InputTextType placeholder="Username" value={username} />
      </View>
      {/* Name & Lastname Input */}
      <View style={styles.inputChildContainer}>
        <InputTextType placeholder="Name" value={firstName} />
        <InputTextType placeholder="Lastname" value={lastName} />
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
          <InputSelectType placeholder="Gender" value={gender} />
        </View>
      </View>

      {/* Nation & City Input */}
      <View style={styles.inputChildContainer}>
        <View style={{ flex: 1 }}>
          <TextPrimary style={[MainStyle.textBold, { fontSize: 20 }]}>
            Nation
          </TextPrimary>
          <InputSelectType placeholder="Nation" value={nation} />
        </View>
        <View style={{ flex: 1 }}>
          <TextPrimary style={[MainStyle.textBold, { fontSize: 20 }]}>
            City
          </TextPrimary>
          <InputSelectType placeholder="City" value={city} />
        </View>
      </View>
      {/* introInput */}
      <View style={styles.inputChildContainer}>
        <InputTextType placeholder="Introquotes" value={intro} />
      </View>
      {/* AboutInput */}
      <View style={styles.inputChildContainer}>
        <InputTextType placeholder="AboutMe" value={describe} />
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
