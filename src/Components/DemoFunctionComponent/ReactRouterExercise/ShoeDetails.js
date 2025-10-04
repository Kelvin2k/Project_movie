import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const ShoeDetails = () => {
  const param = useParams();
  console.log(param);

  const [detail, setDetail] = useState();

  useEffect(() => {
    const promise = axios({
      method: "GET",
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${param.id}`,
    });
    promise
      .then((res) => {
        console.log(res);
        setDetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(detail);

  const location = useLocation();
  console.log(location);

  return (
    <div className="py-10">
      <h1>Product details</h1>
      <div className="flex">
        <div className="w-4/12">
          <img src={detail?.image} alt="" />
        </div>
        <div className="w-8/12">
          <h2 className="font-fold text-3xl">{detail?.name}</h2>
          <p className="text-2xl mt-4">Price: {detail?.price}</p>
        </div>
      </div>
      <h3>See more other products</h3>
      <div className="grid grid-cols-3">
        {detail?.relatedProducts?.map((item, index) => {
          return (
            <div className="p-5 border border-red-400 rounded-lg" key={index}>
              <img src={item.image} alt="" />
              <div>
                <h4 className="font-bold text-xl">{item.name}</h4>
                <p>{item.price}</p>
              </div>
              <Link
                to={`/detail/${item.id}`}
                className="py-2 px-5 bg-green-500 mt-3 text-white rounded-lg hover:bg-red-600 duration-500"
              >
                Product Details
              </Link>
              {/* <button
            onClick={() => {
              navigate(`/detail/${item.id}`);
            }}
            className="py-2 px-5 bg-green-500 mt-3 text-white rounded-lg hover:bg-red-600 duration-500"
          >
            Product Details
          </button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShoeDetails;
