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
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { color } from "react-native-reanimated";

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
        <View style={[MainStyle.modalView, { padding: 0 }]}>
          <View style={[MainStyle.modalHeader, { padding: 10, alignItems: "center" }]}>
            <TouchableOpacity
              style={[MainStyle.modalButton, { backgroundColor: "#323232" }]}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={MainStyle.textWhiteBold}>Cancel</Text>
            </TouchableOpacity>
            <Text style={[MainStyle.textBold, { fontSize: 19 }]}>Filter</Text>
            <TouchableOpacity
              style={MainStyle.modalButton}
              onPress={() => showFilterData()}
            >
              <Text style={MainStyle.textWhiteBold}>Done</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            {/* AgeSelect */}
            <View style={styles.dataFilterContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Material name="human-male-boy" size={30} color="#fff" />
                <Text style={MainStyle.textWhiteBold}>Age </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TextInput
                  keyboardType="numeric"
                  style={styles.textInput}
                  value={minAge}
                  onChangeText={(value) => setMinAge(value)}
                />
                <Text style={MainStyle.textWhiteBold}> - </Text>
                <TextInput
                  keyboardType="numeric"
                  style={styles.textInput}
                  value={maxAge}
                  onChangeText={(value) => setMaxAge(value)}
                />
              </View>
            </View>
            {/* GenderSelect */}
            <View style={styles.dataFilterContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome name="intersex" size={30} color="#fff" />
                <Text style={MainStyle.textWhiteBold}>Gender  </Text>
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
            </View>
            {/* CountySelect */}
            <View style={styles.dataFilterContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome name="flag" size={30} color="#fff" />
                <Text style={MainStyle.textWhiteBold}> Country  </Text>
              </View>
              <SelectData data={country} setData={setCountry} />
            </View>
            {/* TagSelect */}
            <View style={styles.dataFilterContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome name="tag" size={30} color="#fff" />
                <Text style={MainStyle.textWhiteBold}> Tag  </Text>
              </View>
            </View>
          </ScrollView>
        </View>
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
    backgroundColor: "#424242",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});
export default SearchFilter;
