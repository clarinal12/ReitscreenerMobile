import React from "react";
import { shape, string, node } from "prop-types";
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content
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

CoreLayout.propTypes = {
  navigation: shape({}),
  title: string,
  children: node
};

CoreLayout.defaultProps = {
  navigation: {},
  title: string,
  children: null
};

export default CoreLayout;
