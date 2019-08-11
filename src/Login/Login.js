import React from "react";
import { Content } from "native-base";
import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <Content
      padder
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <LoginForm />
    </Content>
  );
};

export default Login;
