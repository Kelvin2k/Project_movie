import React from "react";
import { produce } from "immer";
import { useImmer } from "use-immer";

const DemoProps = ({ student, setStudent }) => {
  return (
    <div>
      {/* <p>{number}</p>
      <button
        onClick={() => {
          setNumber(number + 10);
        }}
        className="py-2 px-5 bg-green-600 text-white rounded-lg"
      >
        Increase value
      </button> */}

      <p>{student.name}</p>
      <p>{student.age}</p>
      <p>{student.class}</p>
      <button
        onClick={() => {
          //     let newStudent = student
          //     newStudent.name = "John"
          //    setStudent(newStudent)
          setStudent(
            produce(student, (draft) => {
              draft.name = "John";
              draft.hobbies.physical = "dancing";
            })
          );
        }}
        className="py-2 px-5 bg-green-600 text-white rounded-lg"
      >
        Change student name
      </button>
    </div>
  );
};

export default DemoProps;
