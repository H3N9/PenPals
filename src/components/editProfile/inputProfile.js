import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MainStyle from "../../style/mainStyle";
import InputTextType from "./inputTextType";
import InputSelectType from "./inputSelectType";
import { TextPrimary } from "../../style/themeComponent";
import DatePicker from "./datePicker";

const InputProfile = ({ newDetail, setNewDetail }) => {

  return (
    <View style={{ padding: 20 }}>
      {/* UsernameInput */}
      <View style={styles.inputChildContainer}>
        <InputTextType
          placeholder="Username"
          newDetail={newDetail}
          data="username"
          setNewDetail={setNewDetail}
        />
      </View>
      {/* Name & Lastname Input */}
      <View style={styles.inputChildContainer}>
        <InputTextType placeholder="Name" newDetail={newDetail} data="firstName" setNewDetail={setNewDetail} />
        <InputTextType
          placeholder="Lastname"
          newDetail={newDetail}
          data="lastName"
          setNewDetail={setNewDetail}
        />
      </View>

      {/* BirthDay Input */}
      <TextPrimary
        style={[MainStyle.textBold, { fontSize: 20, marginTop: 10 }]}
      >
        BirthDate
      </TextPrimary>
      <View style={[styles.inputChildContainer, { marginTop: 0 }]}>
        {/* <DatePicker
          setNewDetail={setNewDetail}
          newDetail={newDetail}
          data="birthDate"
        /> */}
      </View>
      {/* Gender Input */}
      <View style={styles.inputChildContainer}>
        <View style={{ flex: 0.5 }}>
          <TextPrimary style={[MainStyle.textBold, { fontSize: 20 }]}>
            Gender
          </TextPrimary>
          <InputSelectType
            placeholder="Gender"
            newDetail={newDetail}
            data="gender"
            setNewDetail={setNewDetail}
          />
        </View>
      </View>

      {/* Nation & City Input */}
      <View style={styles.inputChildContainer}>
        <View style={{ flex: 1 }}>
          <TextPrimary style={[MainStyle.textBold, { fontSize: 20 }]}>
            Nation
          </TextPrimary>
          <InputSelectType
            placeholder="Nation"
            newDetail={newDetail}
            data="nation"
            setNewDetail={setNewDetail}
          />
        </View>
        <View style={{ flex: 1 }}>
          <TextPrimary style={[MainStyle.textBold, { fontSize: 20 }]}>
            City
          </TextPrimary>
          <InputSelectType
            placeholder="City"
            newDetail={newDetail}
            data="city"
            setNewDetail={setNewDetail}
          />
        </View>
      </View>
      {/* introInput */}
      <View style={styles.inputChildContainer}>
        <InputTextType
          placeholder="Introquotes"
          newDetail={newDetail}
          data="introQuotes"
          setNewDetail={setNewDetail}
        />
      </View>
      {/* AboutInput */}
      <View style={styles.inputChildContainer}>
        <InputTextType
          placeholder="AboutMe"
          newDetail={newDetail}
          data="aboutMe"
          setNewDetail={setNewDetail}
        />
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
