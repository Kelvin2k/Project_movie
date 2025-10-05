import * as Yup from "yup";

export const validateUser = Yup.object({
  // place contain attribute from initialValues need valiate
  // required help check empty value
  id: Yup.string().required("Please input id"),
  userName: Yup.string().required("Please input name"),
  userEmail: Yup.string()
    .email("Please input correct email format")
    .required("please do not leave empty"),
  userPhoneNumber: Yup.string()
    //   matches function help check data input based on regex: has two passing values, first is regex string, second is message when data is not matched
    .matches(
      /^(84|0[3|5|7|8|9])[0-9]{8}$/,
      "Please input correct phone number format"
    )
    .required("Please do not leave this place empty"),
  userPassword: Yup.string()
    .min(6, "Please input minimum 6 characters")
    .max(10, "Please input maximum 10 characters")
    .required("Please input password")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/,
      "Please input correct password includes number and special character"
    ),
  userCode: Yup.string().required("Please do not leave empty"),
});
