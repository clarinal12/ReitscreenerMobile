import React from "react";
import { shape } from "prop-types";
import { Button, Body, Text, Card, CardItem } from "native-base";
import CoreLayout from "../CoreLayout";

const Dashboard = props => {
  const { navigation } = props;

  return (
    <CoreLayout {...props} title="Dashboard">
      <Card>
        <CardItem>
          <Body>
            <Text>Chat App to talk some awesome people!</Text>
          </Body>
        </CardItem>
      </Card>
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

Dashboard.propTypes = {
  navigation: shape({})
};

Dashboard.defaultProps = {
  navigation: {}
};

export default Dashboard;
