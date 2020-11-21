import React, {useEffect, useState} from "react";
import { View, SafeAreaView, FlatList, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import Homebar from "../components/homebar";
import MainStyle from "../style/mainStyle";
import { useSelector } from "react-redux";
import {
  TextPrimary,
  SecondContainer,
  InputTextBg,
  PrimaryContainer,
  EntypoIcon,
  FontAwesomeIcon
} from "../style/themeComponent";
import SwitchSelector from "react-native-switch-selector";
import path from "../path"
import { postLoad } from "../fetch"
import ModalSelect from '../components/editProfile/modalSelect'


const CreateTag = ({ navigation }) => {
  const theme = useSelector((state) => state.themeReducer.theme);

  const [tagType, setTagType] = useState("hobbies")
  const [modalVisible, setModalVisible] = useState(false);
  const [ newTag, setNewTag ] = useState({type: tagType, name: "", category: ""})

  const controller = new AbortController
  const signal = controller.signal
  const authorize = useSelector((state) => state.Authorize.authorize)
  const tagData = [
    { label: "HobbiesTag", value: "hobbies" },
    { label: "FavoriteTag", value: "favorites" },
  ];

  const CreateTag = () => {
    if(tagType === "hobbies"){
      newTag.category = ""
      setNewTag(newTag)
      console.log("hobbies")
    }
    console.log(newTag)
    postLoad(navigation, authorize.token, path.urlCreateTag, newTag, () => console.log("asd"), signal)
    navigation.goBack()
  }
  return (
    <PrimaryContainer style={[MainStyle.mainBackground]}>
        <PrimaryContainer style={{padding: 10, flexDirection: "row", justifyContent: "space-between"}} >
          <TouchableOpacity style={{padding: 5, justifyContent: "center"}} onPress={() => navigation.goBack()}>
              <FontAwesomeIcon
                name="chevron-left"
                size={22}
              />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 5, justifyContent: "center"}} onPress={() => CreateTag()}>
              <TextPrimary style={{fontSize: 16, fontWeight: "600"}}>Create</TextPrimary>
          </TouchableOpacity>
        </PrimaryContainer>
        <TextPrimary style={{fontSize: 30, fontWeight: "bold", paddingLeft: 15, padding: 5}}>CreateTag</TextPrimary>
        <View style={{padding: 15}}>
            <SwitchSelector
              options={tagData}
              style={{
                width: "100%",
                borderWidth: 1,
                padding: 2,
                borderColor: "rgba(52, 138, 217, 0.8)",
                borderRadius: 50,
              }}
              buttonColor="rgba(52, 138, 217, 0.8)"
              textColor="#AAA"
              backgroundColor="#FFF"
              height={35}
              textStyle={{ fontWeight: "600" }}
              selectedTextStyle={{ color: "#FFF", fontWeight: "600" }}
              backgroundColor="transparent"
              initial={0}
              onPress={(value) => {
                setTagType(value)
                newTag.type = value
                setNewTag(newTag)        
              }}
            />
            {tagType === "favorites" ? 
              <React.Fragment>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={[styles.typeSelect, {backgroundColor: theme.secondBackground}]}>
                  <Text style={{color: newTag.category === "" ? "#777" : "#1a1a1a", fontSize: 16}}>{newTag.category === "" ? "Category" : newTag.category}</Text>
                </TouchableOpacity>
              </React.Fragment>
               :
              null
            }    
            <InputTextBg 
              placeholder="Tagname"
              style={styles.input}
              placeholderTextColor="#777"
              clearButtonMode="always"
              onChangeText={(value) => {
                newTag.name = value
                setNewTag(newTag)
              }}
            />
            <ModalSelect
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              focusData={"category"}
              filterData={newTag}
              setFilterData={setNewTag}
              fetchUrl={path.urlGetCategory}
              navigation={navigation}
            />
        </View>  
    </PrimaryContainer>
  );
};

const styles = StyleSheet.create({
  input:{
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 3,
  },
  typeSelect:{
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,
    elevation: 3,
  }
})

export default CreateTag;
