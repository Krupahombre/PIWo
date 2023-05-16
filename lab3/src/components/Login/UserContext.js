import React, { createContext, useState } from 'react';
import usersData from './UsersData';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  let userFormLocalStorage = null;  
  try {
    userFormLocalStorage = JSON.parse(localStorage.getItem('loggedInUser'));
  } catch (error) {
    console.error('Error getting user from local storage', error);
  }
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
