import React from "react";
import { shape } from "prop-types";
import { Button, Text } from "native-base";
import AsyncStorage from "@react-native-community/async-storage";
import { withRouter } from "react-router-native";
import CoreLayout from "../CoreLayout";

const Dashboard = props => {
  const { navigation, history } = props;

  return (
    <CoreLayout {...props} title="Dashboard">
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
      <Button
        full
        rounded
        light
        style={{ marginTop: 10 }}
        onPress={async () => {
          try {
            await AsyncStorage.removeItem("token");
            history.push("/login");
          } catch (e) {
            // saving error
          }
        }}
      >
        <Text>Logout</Text>
      </Button>
    </CoreLayout>
  );
};

Dashboard.propTypes = {
  navigation: shape({}),
  history: shape({})
};

Dashboard.defaultProps = {
  navigation: {},
  history: {}
};

export default withRouter(Dashboard);
