// command rafce help create a function component react
import React, { useState } from "react";
import { produce } from "immer";
import { useImmer } from "use-immer";
import DemoProps from "./DemoProps";
import { Outlet } from "react-router-dom";

const DemoFunction = () => {
  // useState is a React Hook that allows you to add state to a functional component.
  // It returns an array with two elements:
  //   1. The current state value (here, 'number').
  //   2. A function to update that state (here, 'setNumber').
  const [number, setNumber] = useState(10);
  // Create one state storing student information of a university
  const [student, setStudent] = useState({
    name: "Michael",
    age: 26,
    class: "BCS09",
    hobbies: {
      physical: "running, swimming",
      mental: "singing, playing chess",
    },
  });

  return (
    // demo state in function components
    // crate a state help storing number
    <div className="container mx-auto">
      <Outlet />

      <h2>Demo about State in React</h2>

      {/* Demo about Props in function component  */}
      <div>
        <h3>Student information</h3>
        <DemoProps student={student} setStudent={setStudent} />
      </div>
    </div>
  );
};

export default DemoFunction;
