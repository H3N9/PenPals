import React from "react";
import ProfileHeader from "./profileHeader";
import InputProfile from "./inputProfile";

const MainEdit = ({ navigation, user }) => {
  return (
    <React.Fragment>
      <ProfileHeader navigation={navigation} />
      <InputProfile user={user} navigation={navigation} />
    </React.Fragment>
  );
};

export default MainEdit;
