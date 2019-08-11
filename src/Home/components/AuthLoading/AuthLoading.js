import { useEffect } from "react";
import { withRouter } from "react-router-native";
import AsyncStorage from "@react-native-community/async-storage";

const AuthLoading = props => {
  const { navigation, history } = props;
  useEffect(() => {
    let token = null;
    async function getToken() {
      try {
        token = await AsyncStorage.getItem("token");
        if (token) {
          navigation.navigate("Dashboard");
        } else {
          history.push("/login");
        }
      } catch (error) {
        token = null;
      }
    }
    getToken();
  });

  return true;
};

export default withRouter(AuthLoading);
