import React from "react";

const UsersTable = ({ users }) => {
  return (
    <div className="bg-amber-100 p-4 h-fit rounded shadow-xl border border-amber-200">
      <h1 className="font-bold">Users List</h1>

      <table className="">
        <thead>
          <tr className="text-gray-600">
            <th className=" bg-amber-300  px-1">Name</th>
            <th className=" bg-amber-300  px-1">Email</th>
            <th className=" bg-amber-300  px-1">Mobile</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td className="bg-amber-200 border border-white">
                  {user.name}
                </td>
                <td className="bg-amber-200 border border-white">
                  {user.email}
                </td>
                <td className="bg-amber-200 border border-white">
                  {user.mobile}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
