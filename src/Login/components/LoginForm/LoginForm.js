import React from "react";
import { func, shape } from "prop-types";
import { View } from "react-native";
import { Form, Input, Item, Button, Text } from "native-base";
import { withFormik } from "formik";
import validationSchema from "./validationSchema";

const LoginForm = props => {
  const { handleChange, handleBlur, handleSubmit, values, errors } = props;
  return (
    <View style={{ width: "100%" }}>
      {/* <Input
        placeholder="Email"
        leftIcon={{ type: "font-awesome", name: "user" }}
        leftIconContainerStyle={{ marginRight: 15 }}
        containerStyle={{ marginBottom: 15 }}
        errorMessage={errors.email || null}
        onChangeText={handleChange("email")}
        onBlur={handleBlur("email")}
        value={values.email}
      />
      <Input
        placeholder="Password"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        leftIconContainerStyle={{ marginRight: 15 }}
        containerStyle={{ marginBottom: 15 }}
        errorMessage={errors.password || null}
        onChangeText={handleChange("password")}
        onBlur={handleBlur("password")}
        value={values.password}
      />
      <Button
        title="Login"
        buttonStyle={{ marginTop: 20 }}
        onPress={handleSubmit}
      /> */}
      <Form>
        <Item>
          <Input
            placeholder="Username"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
        </Item>
        <Button full primary>
          <Text> Login </Text>
        </Button>
      </Form>
    </View>
  );
};

LoginForm.propTypes = {
  handleChange: func,
  handleBlur: func,
  handleSubmit: func,
  values: shape({}),
  errors: shape({})
};

LoginForm.defaultProps = {
  handleChange: e => e,
  handleBlur: e => e,
  handleSubmit: e => e,
  values: {},
  errors: {}
};

export default withFormik({
  mapPropsToValues: () => ({}),
  handleSubmit: async (values, { resetForm }) => {
    console.log({ values });
  },
  validationSchema
})(LoginForm);
