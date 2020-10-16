import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
} from "react-native";
import MainStyle from "../../style/mainStyle";
import SwitchSelector from "react-native-switch-selector";
import SelectData from "./selectData";
import { color } from "react-native-reanimated";
import {
  SecondContainer,
  PrimaryContainer,
  InputText,
  TextPrimary,
  FontAwesomeIcon,
  MaterialIcon,
} from "../../style/themeComponent";

const SearchFilter = ({ modalVisible, setModalVisible }) => {
  const [minAge, setMinAge] = useState();
  const [maxAge, setMaxAge] = useState();
  const [country, setCountry] = useState();
  const [gender, setGender] = useState();
  const [tag, setTag] = useState([]);
  const genderData = [
    { label: "Any", value: "Any" },
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  const showFilterData = () => {
    console.log(minAge, maxAge);
    console.log(gender);
    console.log(country);
  };
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={MainStyle.centeredView}>
        <SecondContainer style={[MainStyle.modalView, { padding: 0 }]}>
          <View
            style={[
              MainStyle.modalHeader,
              { padding: 10, alignItems: "center" },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <TextPrimary style={{ padding: 12 }}>Cancel</TextPrimary>
            </TouchableOpacity>
            <TextPrimary style={[MainStyle.textBold, { fontSize: 18 }]}>
              Filter
            </TextPrimary>
            <TouchableOpacity
              style={MainStyle.modalButton}
              onPress={() => showFilterData()}
            >
              <Text style={MainStyle.textWhite}>Done</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            {/* AgeSelect */}
            <PrimaryContainer style={styles.dataFilterContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcon name="human-male-boy" size={30} />
                <TextPrimary style={MainStyle.textBold}>Age </TextPrimary>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TextInput
                  keyboardType="numeric"
                  style={styles.textInput}
                  value={minAge}
                  onChangeText={(value) => setMinAge(value)}
                />
                <TextPrimary style={MainStyle.textBold}> - </TextPrimary>
                <InputText
                  keyboardType="numeric"
                  style={styles.textInput}
                  value={maxAge}
                  onChangeText={(value) => setMaxAge(value)}
                />
              </View>
            </PrimaryContainer>

            {/* GenderSelect */}
            <PrimaryContainer style={styles.dataFilterContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesomeIcon name="intersex" size={30} />
                <TextPrimary style={MainStyle.textBold}>Gender </TextPrimary>
              </View>
              <SwitchSelector
                options={genderData}
                style={{ width: 170 }}
                buttonColor="#91d18b"
                textColor="#DDD"
                selectedTextStyle={{ color: "#1a1a1a" }}
                backgroundColor="#747474"
                initial={0}
                onPress={(value) => {
                  setGender(value);
                }}
              />
            </PrimaryContainer>

            {/* CountySelect */}
            <PrimaryContainer style={styles.dataFilterContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesomeIcon name="flag" size={30} />
                <TextPrimary style={MainStyle.textBold}> Country </TextPrimary>
              </View>
              <SelectData data={country} setData={setCountry} />
            </PrimaryContainer>

            {/* TagSelect */}
            <PrimaryContainer style={styles.dataFilterContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesomeIcon name="tag" size={30} />
                <TextPrimary style={MainStyle.textBold}> Tag </TextPrimary>
              </View>
            </PrimaryContainer>
          </ScrollView>
        </SecondContainer>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#525252",
    width: 45,
    borderRadius: 5,
    color: "#fff",
    padding: 5,
  },
  dataFilterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});

export default SearchFilter;
