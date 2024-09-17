import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "Too Short! ")
    .max(32, "Too Long!")
    .required("Enter Username"),
  password: Yup.string()
    .min(8, "Too Short! ")
    .max(32, "Too Long!")
    .required("Enter Password"),
});
