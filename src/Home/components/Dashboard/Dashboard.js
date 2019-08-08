import React from "react";
// import { Button, ThemeProvider } from "react-native-elements";
import CoreLayout from "../CoreLayout";
import { Button, Body, Text, Card, CardItem } from "native-base";

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

export default Dashboard;