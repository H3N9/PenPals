import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import MainStyle from "../../style/mainStyle";
import { color } from "react-native-reanimated";
import AgeSelect from "./ageSelect";
import GenderSelect from "./genderSelect";
import CountrySelect from "./countrySelect";
import TagSelect from "./tagSelect";
import {
  SecondContainer,
  PrimaryContainer,
  InputText,
  TextPrimary,
  FontAwesomeIcon,
} from "../../style/themeComponent";

const SearchFilter = ({ modalVisible, setModalVisible }) => {
  const [filterData, setFilterData] = useState({
    minAge: undefined,
    maxAge: undefined,
    country: undefined,
    gender: undefined,
    tag: undefined,
  });

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
              onPress={() => {
                setModalVisible(!modalVisible);
                console.log(filterData);
              }}
            >
              <Text style={MainStyle.textWhite}>Done</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <AgeSelect filterData={filterData} setFilterData={setFilterData} />
            <GenderSelect
              filterData={filterData}
              setFilterData={setFilterData}
            />
            <CountrySelect
              filterData={filterData}
              setFilterData={setFilterData}
            />
            <TagSelect filterData={filterData} setFilterData={setFilterData} />
          </ScrollView>
        </SecondContainer>
      </View>
    </Modal>
  );
};

export default SearchFilter;
