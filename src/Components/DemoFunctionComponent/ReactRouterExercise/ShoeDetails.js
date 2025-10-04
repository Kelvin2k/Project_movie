import React from "react";
import { useLocation, useParams } from "react-router-dom";

const ShoeDetails = () => {
  const param = useParams();
  console.log(param)

  const location = useLocation();
  console.log(location)

  

  return <div>ShoeDetails</div>;
};

export default ShoeDetails;
