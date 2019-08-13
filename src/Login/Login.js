import React from "react";
import { shape } from "prop-types";
import {
  Content,
  Container,
  Body,
  Card,
  CardItem,
  Text,
  Button,
  View
} from "native-base";
import { Image } from "react-native";
import { withRouter } from "react-router-native";
import LoginForm from "./components/LoginForm";

const Login = props => {
  const { history } = props;
  return (
    <Container>
      {/* <Header noShadow>
        <Body>
          <Title>REITScreener</Title>
        </Body>
      </Header> */}
      <Content
        padder
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Image
          style={{
            width: 220,
            height: 50,
            resizeMode: "stretch",
            marginBottom: 50
          }}
          source={{
            uri:
              "data:image/png;base64,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"
          }}
        />
        <Card style={{ width: "100%" }}>
          <CardItem>
            <Body>
              <LoginForm />
              <View
                style={{
                  alignSelf: "center",
                  alignItems: "center",
                  marginTop: 30
                }}
              >
                <Text>Don't have an account?</Text>
                <Button
                  primary
                  transparent
                  onPress={() => history.push("signup")}
                >
                  <Text>Sign up for free</Text>
                </Button>
              </View>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

Login.propTypes = {
  history: shape({})
};

Login.defaultProps = {
  history: {}
};

export default withRouter(Login);
