import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ListShoes = ({ shoeList }) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {shoeList.map((item, index) => {
        return (
          <div className="p-5 border border-red-400 rounded-lg" key={index}>
            <img src={item.image} alt="" />
            <div>
              <h4 className="font-bold text-xl">{item.name}</h4>
              <p>{item.price}</p>
            </div>
            {/* <Link
              to={`/detail/${item.id}`}
              className="py-2 px-5 bg-green-500 mt-3 text-white rounded-lg hover:bg-red-600 duration-500"
            >
              Product Details
            </Link> */}
            <button
              onClick={() => {
                navigate(`/detail/${item.id}`);
              }}
              className="py-2 px-5 bg-green-500 mt-3 text-white rounded-lg hover:bg-red-600 duration-500"
            >
              Product Details
            </button>
          </div>
        );
      })}
      {/* item  */}
    </div>
  );
};

export default ListShoes;
