import React from "react";
// import { Button, ThemeProvider } from "react-native-elements";
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem
} from "native-base";

const CoreLayout = props => {
  const { title, navigation, children } = props;

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>{title || "Page Title"}</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>{children}</Content>
    </Container>
  );
};

export default CoreLayout;
