import React from "react";
import { node } from "prop-types";
import { View } from "native-base";

const FormGroup = props => {
  const { children } = props;

  return (
    <View
      style={{
        marginBottom: 15,
        width: "100%"
      }}
    >
      {children}
    </View>
  );
};

FormGroup.propTypes = {
  children: node
};

FormGroup.defaultProps = {
  children: null
};

export default FormGroup;
