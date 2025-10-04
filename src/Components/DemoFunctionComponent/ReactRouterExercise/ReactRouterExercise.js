import React, { useEffect, useState } from "react";
import ListShoes from "./ListShoes";
import axios from "axios";

const ReactRouterExercise = () => {
  // hook useEffect
  // useEffect use for 3 main state of component that is mounting, updating, unmounting
  // In the beginning: mounting process, use mouting process on function component, we use useEffect with 2 parameters, the first one is the will run component, the second one is an empty array

  const [shoeList, setShoeList] = useState([]);

  useEffect(() => {
    // use call data and render on UI in the first time render component
    let promise = axios({
      method: "GET",
      url: "https://shop.cyberlearn.vn/api/Product",
    });
    promise
      .then((res) => {
        console.log(res);
        setShoeList(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(shoeList?.map);

  return (
    <div>
      <h2>Exercise Shoe shop</h2>
      <ListShoes shoeList={shoeList}/>
    </div>
  );
};

export default ReactRouterExercise;
