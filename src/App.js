import React, { Component } from "react";
import DemoFunction from "./Components/DemoFunctionComponent/DemoFunction";
import { Route, Routes } from "react-router-dom";
import DemoReactRouter from "./Components/DemoFunctionComponent/DemoReactRouter";
import TemplateDemo from "./Templates/DemoReactRouter/TemplateDemo";
import ReactRouterExercise from "./Components/DemoFunctionComponent/ReactRouterExercise/ReactRouterExercise";
import DemoApplication from "./Components/DemoApplication";
import ShoeDetails from "./Components/DemoFunctionComponent/ReactRouterExercise/ShoeDetails";
import Page404 from "./Components/DemoFunctionComponent/ReactRouterExercise/Page404";
import { Formik } from "formik";
import FormikExercise from "./Components/DemoFunctionComponent/Formik Exercise/FormikExercise";

function App() {
  // return <div className="App">
  //   <h1 className="text-red-500">Hello world</h1>
  //   <DemoFunction />
  // </div>
  return (
    <>
      <Routes>
        {/* When go to main page will display component DemoFunction  */}
        {/* <Route element={<DemoFunction />} path="/home" /> */}
        {/* ask  */}
        {/* localhost:3000/home  */}
        {/* <Route element={<DemoFunction />} path="/">
          <Route element={<DemoReactRouter />} path="/ask" />
        </Route> */}

        <Route element={<TemplateDemo />} path="/">
          {/* When user just access to path of parent Route, this will display component that has attribute index automatically  */}
          <Route element={<ReactRouterExercise />} index />
          <Route element={<DemoApplication />} path="application" />
          {/* create a route that can pass an id in the URL to help determine which product the user wants to view */}
          <Route element={<ShoeDetails />} path="detail/:id" />
          <Route element={<FormikExercise />} path="/cinema"></Route>
        </Route>
        {/* check page not found  */}
        <Route element={<Page404 />} path="*"></Route>
      </Routes>
    </>
  );
}

export default App;
