import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import Navbar from "../components/navbar";
import MainStyle from "../style/mainStyle";
import { Dimensions } from "react-native";
import { PrimaryContainer } from "../style/themeComponent";
import Header from "../components/addTag/header";
import TagResult from "../components/addTag/tagResult";
import SelectedTag from "../components/addTag/selectedTag";

const screenWidth = Math.round(Dimensions.get("window").width);

const AddTag = ({ navigation }) => {
  const [searchTag, setSearchTag] = useState([]); //Tag จากผลการค้นหา
  const [tagSelected, setTagSelected] = useState([]); //Tag ที่ถูกเลือก
  const tagData = [
    { title: "name1", id: "1" },
    { title: "name2", id: "2" },
    { title: "name3", id: "3" },
    { title: "name4", id: "4" },
  ];
  return (
    <PrimaryContainer style={MainStyle.mainBackground}>
      <View style={stylesCondition()}>
        <Header
          navigation={navigation}
          setSearchTag={setSearchTag}
          tagData={tagData}
          searchTag={searchTag}
        />
        <SelectedTag tagSelected={tagSelected} />
        <ScrollView>
          <View style={styles.tagResultContainer}>
            {searchTag.map((itemValue) => (
              <TagResult
                tagData={itemValue}
                key={itemValue.id}
                tagSelected={tagSelected}
                setTagSelected={setTagSelected}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <Navbar navigation={navigation} />
    </PrimaryContainer>
  );
};

const stylesCondition = () => {
  if (screenWidth >= 768) {
    return { flex: 1, marginHorizontal: "20%" };
  } else {
    return { flex: 1 };
  }
};

const styles = StyleSheet.create({
  tagResultContainer: {
    justifyContent: "center",
    margin: 5,
  },
});
export default AddTag;
