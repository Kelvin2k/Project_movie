import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { validateUser } from "../../../util/validation";
import TableUser from "./TableUser";
import { useDispatch, useSelector } from "react-redux";
import { getValueUser, updateUser } from "../../../Redux/slice/userSlice";

const FormikExercise = () => {
  // id, name,price, type, description
  // id, name, email, passowrd, phonenumber, userCode
  const { showError } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const formik = useFormik({
    // initialValues will be an object containing attributes sotring value from user input
    // Reminder: When using Formik, input fields must have a 'name' attribute that matches the corresponding key in initialValues.
    initialValues: {
      id: "",
      userName: "",
      userEmail: "",
      userCode: "",
      userPassword: "",
      userPhoneNumber: "",
    },
    // onSubmit is a function that runs when the user triggers the onSubmit event and all input data passes validation
    // The parameter 'values' represents the user input data after they finish entering it
    // errors stores error messages for the user when they input invalid data
    // touched helps check whether the user has interacted with an input field or not
    // values stores the data entered by the user
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(getValueUser(values));
      resetForm();
    },
    validationSchema: validateUser,
  });

  //handleChange: a function help taking data of user put into fomik when user input
  // handleBlur: a function helps check user escape from input(mean user input then click out of input form)
  // handleSubmit: a function help run onSubmit event and return user inputs as well as handling
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setValues,
    resetForm,
  } = formik;

  //   console.log(errors);
  console.log(touched);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="mb-5 font-bold text-2xl">
        Exercise formik and yup handle form input data
      </h1>
      <div>
        <form onSubmit={handleSubmit} action="">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="id"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Id
              </label>
              <input
                type="text"
                id="id"
                name="id"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Please input id"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.id}
              />
              {/* Use a logical (binary) operator to check: when the user has interacted with the input (touched) and there is an error, show the error message. Otherwise, show nothing. */}
              {errors.id && touched.id ? (
                <p className="text-red-500 text-xs">{errors.id}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="userName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                User Name
              </label>
              <input
                type="text"
                // id="userName"
                name="userName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Please input user name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userName}
              />
              {errors.userName && touched.userName ? (
                <p className="text-red-500 text-xs">{errors.userName}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="userEmail"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                User Email
              </label>
              <input
                type="text"
                id="userEmail"
                name="userEmail"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Please input user email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userEmail}
              />
              {errors.userEmail && touched.userEmail ? (
                <p className="text-red-500 text-xs">{errors.userEmail}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="userPhoneNumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                User Phone Number
              </label>
              <input
                type="text"
                id="userPhoneNumber"
                name="userPhoneNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Please input user code"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userPhoneNumber}
              />
              {errors.userPhoneNumber && touched.userPhoneNumber ? (
                <p className="text-red-500 text-xs">{errors.userPhoneNumber}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="userCode"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select User Code
              </label>
              <select
                id="userCode"
                name="userCode"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userCode}
              >
                <option value="">Choose User Code</option>
                <option value="employee">Employee</option>
                <option value="headOfficer">Head Officer</option>
                <option value="director">Director</option>
              </select>
              {errors.userCode && touched.userCode ? (
                <p className="text-red-500 text-xs">{errors.userCode}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="userPassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                User Password
              </label>
              <input
                type="text"
                id="userPassword"
                name="userPassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Please input user password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userPassword}
              />
              {errors.userPassword && touched.userPassword ? (
                <p className="text-red-500 text-xs">{errors.userPassword}</p>
              ) : null}
            </div>
          </div>
          <p className="text-xs text-red-500">{showError}</p>
          <button className="bg-black text-white py-2 my-2 px-4 me-2 rounded-md">
            Add user
          </button>
          <button
            className="bg-orange-500 text-white py-2 my-2 px-4 rounded-md"
            type="button"
            onClick={() => {
              // dispatch(updateUser(formik.values));
              // console.log(formik.values);
              dispatch(updateUser(values));
              resetForm();
            }}
          >
            Update user
          </button>
        </form>
      </div>
      <div>
        <TableUser setValues={setValues} />
      </div>
    </div>
  );
};

export default FormikExercise;
