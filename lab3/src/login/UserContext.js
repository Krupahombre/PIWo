import React, { createContext, useState } from 'react';
import usersData from './UsersData';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const login = (email, password) => {
    const user = usersData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setLoggedInUser(user);
    }
  };

  const logout = () => {
    setLoggedInUser(null);
  };

  return (
    <UserContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
