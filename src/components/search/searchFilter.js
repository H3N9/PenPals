import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import MainStyle from "../../style/mainStyle";
import AgeSelect from "./ageSelect";
import GenderSelect from "./genderSelect";
import SelectManyItem from "./selectManyItem";
import { SecondContainer, TextPrimary } from "../../style/themeComponent";
import { useDispatch } from 'react-redux'
import { actionSearch } from '../../../redux/searchForm'
import path from '../../path'

const SearchFilter = ({ modalVisible, setModalVisible, navigation }) => {

  const [filterData, setFilterData] = useState({
    minAge: undefined,
    maxAge: undefined,
    country: [],
    gender: undefined,
    tag: [],
  });
  const dispatch = useDispatch()
  

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={[MainStyle.centeredView]}>
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
                  dispatch(actionSearch({ age:[Number(filterData.minAge), Number(filterData.maxAge)], tag: filterData.tag }))
                }}
              >
                <Text style={MainStyle.textWhite}>Done</Text>
              </TouchableOpacity>
            </View>
            {/* Modal Content */}
            <AgeSelect filterData={filterData} setFilterData={setFilterData} />
            <GenderSelect
              filterData={filterData}
              setFilterData={setFilterData}
            />
            <SelectManyItem
              filterData={filterData}
              setFilterData={setFilterData}
              focusData="country"
              title="Country"
              fetchUrl="https://restcountries.eu/rest/v2/all?fields=name"
              navigation={navigation}
            />
            <SelectManyItem
              filterData={filterData}
              setFilterData={setFilterData}
              focusData="tag"
              title="Tag"
              fetchUrl={path.urlTag}
              navigation={navigation}
            />
          </SecondContainer>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SearchFilter;
