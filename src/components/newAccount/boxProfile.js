import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import BoxInfo from "./boxInfo";
import UserList from "./userList";
import ListTag from "./ListTag";
import ContactButton from "./contactButton";
import AboutAcc from "./aboutAcc";
import Schema from "../../schema";
import styled from 'styled-components/native'

const BoxProfile = ({ id, navigation }) => {
  //const user = Schema.data.user[parseInt(id)-1]
  const user = Schema.getProfile(id);
  const describe = user.describe;
  const { hobbies, favorites } = user;
  const isAuthUser = id === Schema.user;

  return (
    <Container>
      <BoxInfo user={user} navigation={navigation}/>
      <UserList user={user} />
      {isAuthUser && (
        <View style={styles.contact}>
          <ContactButton
            title={"Edit Profile"}
            handle={() => navigation.navigate("EditProfile")}
            iconName={"edit"}
          />
        </View>
      )}
      {!isAuthUser && (
        <View style={styles.contact}>
          <ContactButton
            title={"Add Friend"}
            handle={() => {}}
            iconName={"add-user"}
          />
          <ContactButton
            title={"Message"}
            handle={() => {}}
            iconName={"chat"}
          />
        </View>
      )}
      <ListTag
        tag={hobbies}
        title={"Hobbies & interests Tag"}
        handle={() => navigation.navigate("AddTag")}
      />
      <ListTag
        tag={favorites}
        title={"Favorite Tag"}
        handle={() => navigation.navigate("AddTag")}
      />
      <AboutAcc describe={describe} />
    </Container>
  );
};

const styles = StyleSheet.create({
  contact: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
});

const Container = styled.View`
  background-color: ${(props) => props.theme.primaryBackground};
`

export default BoxProfile;
