import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../Redux/slice/userSlice";

const TableUser = () => {
  // useSelector is a hook that allows you to access data from the Redux store's state
  const { arrUser } = useSelector((state) => state.userSlice);
  //redux.arrUser
  console.log(arrUser);
  const dispatch = useDispatch();

  return (
    <div className="mt-5">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User Id
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                User Email
              </th>
              <th scope="col" className="px-6 py-3">
                User Code
              </th>
              <th scope="col" className="px-6 py-3">
                User Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
            </tr> */}
            {arrUser.map((item, index) => {
              return (
                <tr
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.id}
                  </th>
                  <td className="px-6 py-4">{item.userName}</td>
                  <td className="px-6 py-4">{item.userEmail}</td>
                  <td className="px-6 py-4">{item.userCode}</td>
                  <td className="px-6 py-4">{item.userPhoneNumber}</td>
                  <td className="px-6 py-4 space-x-3">
                    <button
                      className="p-2 text-white bg-red-500"
                      onClick={() => {
                        dispatch(removeUser(item.id));
                      }}
                    >
                      Delete
                    </button>
                    <button className="p-2 text-white bg-yellow-500">
                      Modify
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableUser;
