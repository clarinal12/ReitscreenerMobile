import React from "react";
import { shape } from "prop-types";
import { Image, ImageBackground } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";

const routes = ["Dashboard", "Profile"];

const SideBar = props => {
  const { navigation } = props;
  return (
    <Container>
      <Content>
        <ImageBackground
          source={{
            uri:
              "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
          }}
          style={{
            height: 120,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            square
            style={{ height: 80, width: 70 }}
            source={{
              uri:
                "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
            }}
          />
        </ImageBackground>
        <List
          dataArray={routes}
          renderRow={data => {
            return (
              <ListItem button onPress={() => navigation.navigate(data)}>
                <Text>{data}</Text>
              </ListItem>
            );
          }}
        />
      </Content>
    </Container>
  );
};

SideBar.propTypes = {
  navigation: shape({})
};

SideBar.defaultProps = {
  navigation: {}
};

export default SideBar;
