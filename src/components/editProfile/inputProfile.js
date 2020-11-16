import React, {useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import MainStyle from "../../style/mainStyle";
import InputTextType from "./inputTextType";
import InputSelectType from "./inputSelectType";
import { TextPrimary } from "../../style/themeComponent";
import DatePicker from "./datePicker";

const InputProfile = ({ newDetail, setNewDetail, navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
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
        <TouchableOpacity onPress={()=> setDatePickerVisibility(!isDatePickerVisible)} style={styles.dateButton}>
          <TextPrimary style={{fontSize: 16, textAlign: "center"}}>{newDetail.birthdate}</TextPrimary>
          <DatePicker
            setNewDetail={setNewDetail}
            newDetail={newDetail}
            data="birthDate"
            show={isDatePickerVisible}
            setShow={setDatePickerVisibility}
          />
        </TouchableOpacity>
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
            navigation={navigation}
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
            navigation={navigation}
            link={"https://restcountries.eu/rest/v2/all?fields=name"}
          />
        </View>
        <View style={{ flex: 1 }}>
          <InputTextType
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
  dateButton:{
    flex: 1,
    borderBottomWidth: 1,
    padding: 5,
    borderColor: "#777",
  }
});

export default InputProfile;
