import React, { useState } from "react";
import { func, shape } from "prop-types";
import { withRouter } from "react-router-native";
import _ from "lodash";
import axios from "axios";
import { print } from "graphql";
import AsyncStorage from "@react-native-community/async-storage";
import { Input, Item, Button, Text, Label, Spinner } from "native-base";
import { withFormik } from "formik";
import { SIGN_IN } from "./mutations";
import InputFeedback from "../../../components/InputFeedback";
import FormGroup from "../../../components/FormGroup";
import validationSchema from "./validationSchema";

const LoginForm = props => {
  const { handleChange, handleBlur, values, errors, touched, history } = props;
  const emailError = errors.email && touched.email;
  const passwordError = errors.password && touched.password;
  const [loading, setLoading] = useState(false);
  const [signInError, setSignInError] = useState(null);

  return (
    <>
      <FormGroup>
        {signInError && <Text>Login Error</Text>}
        <Item error={emailError} stackedLabel>
          <Label>Email</Label>
          <Input
            autoCompleteType="email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </Item>
        {emailError && <InputFeedback>{errors.email}</InputFeedback>}
      </FormGroup>
      <FormGroup>
        <Item error={passwordError} stackedLabel>
          <Label>Password</Label>
          <Input
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            secureTextEntry
            autoCapitalize="none"
          />
        </Item>
        {passwordError && <InputFeedback>{errors.password}</InputFeedback>}
      </FormGroup>
      <Button
        full
        primary
        style={{ marginTop: 20 }}
        onPress={async () => {
          if (!_.isEmpty(errors)) return;
          setSignInError(null);
          setLoading(true);
          const response = await axios.post(
            "http://dev-api.reitscreener.com/graphql",
            {
              query: print(SIGN_IN),
              variables: {
                input: { username: values.email, password: values.password }
              }
            }
          );
          const { data } = response;
          if (data.errors && data.errors.length) {
            setSignInError(data.errors[0].message);
          } else {
            try {
              await AsyncStorage.setItem(
                "token",
                data.data.createAccessToken.token
              );
              history.push("/");
            } catch (e) {
              // saving error
            }
          }
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Text>Sign in</Text>}
      </Button>
    </>
  );
};

LoginForm.propTypes = {
  handleChange: func,
  handleBlur: func,
  values: shape({}),
  errors: shape({}),
  touched: shape({}),
  history: shape({})
};

LoginForm.defaultProps = {
  handleChange: e => e,
  handleBlur: e => e,
  values: {},
  errors: {},
  touched: {},
  history: {}
};

export default withFormik({
  validationSchema
})(withRouter(LoginForm));
