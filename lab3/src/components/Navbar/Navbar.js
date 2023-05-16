import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../login/UserContext';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const { loggedInUser, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
  };

  const handleAddNewClick = () => {
    navigate('/add');
  };

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">Choose your dream property!</a>
        <div className="button-container">
          
          {loggedInUser ? (
              <div className="user-info">
                Hello, {loggedInUser.firstName} {loggedInUser.lastName}!
              <button className="btn btn-outline-light" onClick={handleLogout}>Log out</button>
            </div>
          ) : (
            <div className="login-links">
              <Link to="/login">Log in</Link>
            </div>
          )}

          <button className="btn btn-outline-light" onClick={handleAddNewClick}>Add new</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
