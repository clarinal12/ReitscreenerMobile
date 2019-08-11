import React from "react";
import { shape } from "prop-types";
import { Button, Text } from "native-base";
import CoreLayout from "../CoreLayout";

const Profile = props => {
  const { navigation } = props;

  return (
    <CoreLayout {...props} title="Profile">
      <Button
        full
        rounded
        dark
        style={{ marginTop: 10 }}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text>Go to Dashboard</Text>
      </Button>
      <Button
        full
        rounded
        primary
        style={{ marginTop: 10 }}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text>Go to Profiles</Text>
      </Button>
    </CoreLayout>
  );
};

Profile.propTypes = {
  navigation: shape({})
};

Profile.defaultProps = {
  navigation: {}
};

export default Profile;
