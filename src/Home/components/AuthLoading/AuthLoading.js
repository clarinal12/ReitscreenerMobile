import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { AsyncStorage } from "@react-native-community/async-storage";
import { Button } from "react-native-elements";

const AuthLoading = props => {
  const { navigation, history } = props;
  useEffect(() => {
    let token = null;

    async function getToken() {
      try {
        token = await AsyncStorage.getItem("accessToken");
      } catch (error) {
        token = null;
      }
    }

    getToken();

    if (token) {
      navigation.navigate("Dashboard");
    } else {
      history.push("/login");
    }
  });

  return true;
};

export default withRouter(AuthLoading);
