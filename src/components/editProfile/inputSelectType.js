import RNPickerSelect from "react-native-picker-select";
import React, {useEffect, useState} from "react";
import { View, Platform, Picker, TouchableOpacity, Text } from "react-native";
//import {Picker} from '@react-native-community/picker'
import styled from "styled-components/native";
import { useSelector } from "react-redux";
import path from '../../path'
import {getLoad} from '../../fetch'
import ModalSelect from "./modalSelect"


const InputSelectType = ({ placeholder, newDetail, data, setNewDetail, navigation, link }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useSelector((state) => state.themeReducer.theme);
  const authorize = useSelector((state) => state.Authorize.authorize)
  const controller = new AbortController
  const signal = controller.signal
  
  return (
    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{padding: 5, borderBottomColor: "#777", borderBottomWidth: 1}}>
        <Text style={{color: theme.textColor}}>{newDetail[data] || placeholder}</Text>
        <ModalSelect
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          focusData={data}
          filterData={newDetail}
          setFilterData={setNewDetail}
          fetchUrl={link}
          navigation={navigation}
        />
    </TouchableOpacity>
  )
};

const PickerSelect = styled(Picker)`
  color: ${(props) => props.theme.textColor};
`;

export default InputSelectType;
