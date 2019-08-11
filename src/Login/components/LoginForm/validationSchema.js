import * as yup from "yup";

export default yup.object().shape({
  email: yup.string().required("Email is a required field"),
  password: yup.string().required("Password is a required field")
});
