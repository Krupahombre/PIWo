import React, { createContext, useState } from 'react';
import usersData from './UsersData';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const userFormLocalStorage = JSON.parse(localStorage.getItem('loggedInUser'));  
  const [loggedInUser, setLoggedInUser] = useState(userFormLocalStorage);

  const login = (email, password) => {
    const user = usersData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));  
      setLoggedInUser(user);
    }
  };

  const logout = () => {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser(null);
  };

  return (
    <UserContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
