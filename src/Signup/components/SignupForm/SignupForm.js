import React, { useState } from "react";
import { shape } from "prop-types";
import { withRouter } from "react-router-native";
import axios from "axios";
import { print } from "graphql";
import AsyncStorage from "@react-native-community/async-storage";
import { Input, Item, Button, Text, Label, Spinner } from "native-base";
import { Formik } from "formik";
import { Alert } from "react-native";
import { SIGN_IN } from "./mutations";
import InputFeedback from "../../../components/InputFeedback";
import FormGroup from "../../../components/FormGroup";
import validationSchema from "./validationSchema";

const SignupForm = props => {
  const { history } = props;
  const [loading, setLoading] = useState(false);

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        setLoading(true);
        const response = await axios.post(
          "http://dev-api.reitscreener.com/graphql",
          {
            query: print(SIGN_IN),
            variables: {
              input: {
                username: values.email,
                password: values.password
              }
            }
          }
        );
        const { data } = response;
        if (data.errors && data.errors.length) {
          Alert.alert("Sign in failed", data.errors[0].message);
        } else {
          try {
            await AsyncStorage.setItem(
              "token",
              data.data.createAccessToken.token
            );
            resetForm();
            history.push("/");
          } catch (e) {
            // saving error
          }
        }
        setLoading(false);
      }}
      render={({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched
      }) => {
        const firstNameError = errors.firstName && touched.firstName;
        const lastNameError = errors.lastName && touched.lastName;
        const emailError = errors.email && touched.email;
        const passwordError = errors.password && touched.password;
        return (
          <>
            <FormGroup>
              <Item error={firstNameError} stackedLabel>
                <Label>First name</Label>
                <Input
                  autoCompleteType="off"
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.firstName}
                  autoCapitalize="words"
                  // keyboardType="email-address"
                />
              </Item>
              {firstNameError && (
                <InputFeedback>{errors.firstName}</InputFeedback>
              )}
            </FormGroup>
            <FormGroup>
              <Item error={lastNameError} stackedLabel>
                <Label>Last name</Label>
                <Input
                  autoCompleteType="off"
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.lastName}
                  autoCapitalize="words"
                  // keyboardType="email-address"
                />
              </Item>
              {lastNameError && (
                <InputFeedback>{errors.lastName}</InputFeedback>
              )}
            </FormGroup>
            <FormGroup>
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
              {passwordError && (
                <InputFeedback>{errors.password}</InputFeedback>
              )}
            </FormGroup>
            <Button
              full
              disabled={loading}
              primary
              style={{ marginTop: 20 }}
              onPress={handleSubmit}
            >
              {loading ? <Spinner /> : <Text>Register</Text>}
            </Button>
          </>
        );
      }}
    />
  );
};

SignupForm.propTypes = {
  history: shape({})
};

SignupForm.defaultProps = {
  history: {}
};

export default withRouter(SignupForm);
