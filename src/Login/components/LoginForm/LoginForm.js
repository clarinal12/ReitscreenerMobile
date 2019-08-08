import React from "react";
import { Form } from "native-base";
import { Input, Button } from "react-native-elements";
import { Formik } from "formik";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={values => console.log({ values })}
    >
      {props => {
        console.log({ props });
        return (
          <Form style={{ width: "100%" }}>
            <Input
              placeholder="Email"
              leftIcon={{ type: "font-awesome", name: "user" }}
              leftIconContainerStyle={{ marginRight: 15 }}
              containerStyle={{ marginBottom: 15 }}
              onChangeText={props.handleChange("email")}
              onBlur={props.handleBlur("email")}
              value={props.values.email}
            />
            <Input
              placeholder="Password"
              leftIcon={{ type: "font-awesome", name: "lock" }}
              leftIconContainerStyle={{ marginRight: 15 }}
              containerStyle={{ marginBottom: 15 }}
              onChangeText={props.handleChange("password")}
              onBlur={props.handleBlur("password")}
              value={props.values.password}
            />
            <Button
              title="Login"
              buttonStyle={{ marginTop: 20 }}
              onPress={props.handleSubmit}
            />
            <Input
              placeholder="INPUT WITH ERROR MESSAGE"
              errorStyle={{ color: "red" }}
              errorMessage="ENTER A VALID ERROR HERE"
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
