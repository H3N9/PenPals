import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from "react-native";
import MainStyle from "../style/mainStyle";
import { PrimaryContainer, TextPrimary, Ionic } from "../style/themeComponent";
import Header from "../components/addTag/header";
import TagResult from "../components/addTag/tagResult";
import {useSelector} from 'react-redux'
import SelectedTag from "../components/addTag/selectedTag";
import { FontAwesome } from '@expo/vector-icons'; 
import path from '../path'
// import { TouchableOpacity } from "react-native-gesture-handler";

const AddTag = ({ navigation, route }) => {
  const theme = useSelector((state) => state.themeReducer.theme);
  const authorize = useSelector((state) => state.Authorize.authorize)
  const {token} = authorize
  const url = route.params.pathUrl

  const [searchTag, setSearchTag] = useState([]); //Tag จากผลการค้นหา
  const [initTag, setInitTag] = useState([]);
  const [tagSelected, setTagSelected] = useState([]); //Tag ที่ถูกเลือก

  useEffect(() =>{
    // const url = new URL(path.urlHobbTag)
    // const params = {tag: [""]}
    // url.searchParams = new URLSearchParams(params).toString()
    fetch(url, {
      method: 'POST',
      headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: token,
      },
      body: JSON.stringify({name: ""})
    })
    .then( async (response) =>{
      if(response.status === 200){
        const json = await response.json()
        const newTagData = json.map((item1) =>{
          return {...item1, isSelected: false}
        })
        setSearchTag(newTagData)
        setInitTag(newTagData)
      }
    })
  }, [])

  return (
    <PrimaryContainer style={MainStyle.mainBackground}>
      <View style={{flex: 1}}>
        <Header
          navigation={navigation}
          setSearchTag={setSearchTag}
          tagData={searchTag}
          searchTag={searchTag}
          tagSelected={tagSelected}
          initTag={initTag}
        />
        <SelectedTag
          tagSelected={tagSelected}
          setTagSelected={setTagSelected}
          searchTag={searchTag}
          setSearchTag={setSearchTag}
        />
        <ScrollView>
          <View style={[styles.tagResultContainer, styles.shadow]}>
            {searchTag.length === 0 ? (
              <React.Fragment>
                <TextPrimary style={styles.noResult}>No Result</TextPrimary>
              </React.Fragment>
            ) : (
              searchTag.map((itemValue) => (
                <TagResult
                  tagData={itemValue}
                  key={itemValue.id}
                  tagSelected={tagSelected}
                  setTagSelected={setTagSelected}
                />
              ))
            )}
          </View>      
        </ScrollView>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("CreateTag")} style={[styles.createTag, styles.shadow]}>
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>
    </PrimaryContainer>
  );
};


const styles = StyleSheet.create({
  tagResultContainer: {
    justifyContent: "center",
    margin: 5,
    
  },
  noResult: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 50,
    opacity: 0.4,
  },
  createTag:{
    alignItems: "center",
    margin: 20,
    borderRadius: 50,
    width: 55,
    height: 55,
    justifyContent: "center",
    backgroundColor: "#F15F79",
    position: "absolute",
    bottom: 0,
    right: 0
  },
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.38,
    shadowRadius: 1.5,
    elevation: 3,
  }
  
});
export default AddTag;
