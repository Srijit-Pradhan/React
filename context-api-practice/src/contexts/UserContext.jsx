import React, { createContext } from "react";

export const UserDataContext = createContext();
const UserContext = ({ children }) => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      age: 28,
    },
    {
      id: 2,
      name: "Emily Carter",
      email: "emily@example.com",
      age: 24,
    },
    {
      id: 3,
      name: "Michael Smith",
      email: "michael@example.com",
      age: 32,
    },
    {
      id: 4,
      name: "Sophia Johnson",
      email: "sophia@example.com",
      age: 29,
    },
    {
      id: 5,
      name: "Liam Brown",
      email: "liam@example.com",
      age: 35,
    },
  ];
  return (
    <div>
      <UserDataContext.Provider value={users}>{children}</UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
