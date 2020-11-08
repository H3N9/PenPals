import React, { useState } from "react";
import { View, Button, Platform } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const datePicker = ({ newDetail, setNewDetail, show, setShow }) => {
 
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    const birthDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    newDetail.birthdate = birthDate
    setNewDetail({...newDetail})
    console.log(newDetail)
  };

  return (
    <View style={{ flex: 1 }}>
      <DateTimePickerModal
        isVisible={show}
        mode={"date"}
        headerTextIOS="Select BirthDate"
        onConfirm={(date) => onChange(date)}
        onCancel={() => setShow(!show)}
        isDarkModeEnabled={false}
      />
    </View>
  );
};
export default datePicker;
