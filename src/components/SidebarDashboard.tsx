import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/SidebarDashboard.css";

export interface SidebarDashboard {
  handleLogout: () => any;
}

export const Sidebar = ({ handleLogout }: SidebarDashboard) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button onClick={handleSidebarToggle}>Menu</button>
        <div className='d-flex flex-column align-items-center p-3'>
          <ul className='sidebar-menu'>
            <li className='sidebar-item'>
              <Link to='/modifier-mon-profil' className='sidebar-link'>
                Modifier mon profil
              </Link>
            </li>
            <li className='sidebar-item'>
              <Link to='/mes-associations' className='sidebar-link'>
                Mes Associations
              </Link>
            </li>
            <li className='sidebar-item'>
              <Link to='/association-1' className='sidebar-link'>
                Association 1
              </Link>
            </li>
            <li className='sidebar-item'>
              <Link to='/association-2' className='sidebar-link'>
                Association 2
              </Link>
            </li>
            <li className='sidebar-item'>
              <Link to='/association-3' className='sidebar-link'>
                Association 3
              </Link>
            </li>
            <div className='sidebar-footer'>
              <button className='btn btn-danger' onClick={handleLogoutClick}>
                Déconnexion
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
