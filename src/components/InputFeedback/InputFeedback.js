import React from "react";
import { string, node } from "prop-types";
import { Text } from "native-base";

const InputFeedback = props => {
  const { type, children } = props;
  let color;
  if (type.toLowerCase() === "error") color = "#ec3f33";
  else if (type.toLowerCase() === "success") color = "#2ed58d";
  else if (type.toLowerCase() === "warning") color = "#ec9c33";
  else color = "#000";

  return (
    <Text
      style={{
        margin: 5,
        color,
        fontSize: 12
      }}
    >
      {children}
    </Text>
  );
};

InputFeedback.propTypes = {
  type: string,
  children: node
};

InputFeedback.defaultProps = {
  type: "error",
  children: null
};

export default InputFeedback;
