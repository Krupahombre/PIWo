import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser, logOut } from '../../Firebase/UserService';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const firebaseUser = useUser();

  const handleLogout = () => {
    logOut();
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleAddNewClick = () => {
    navigate('/add');
  };

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">Choose your dream property!</a>
        <div className="button-container">
          
          {firebaseUser ? (
            <div className="user-info">
              <div className='user-logged'>
                Hello, {firebaseUser.displayName}!
              </div>  
              <button className="btn btn-outline-light" onClick={handleLogout}>Sign out</button>
            </div>
          ) : (
            <button className="btn btn-outline-light" onClick={handleLoginRedirect}>Sign in</button>
          )}

          <button className="btn btn-outline-light" onClick={handleAddNewClick}>Add new</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
