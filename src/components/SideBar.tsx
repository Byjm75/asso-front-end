import React from "react";
import { Link } from "react-router-dom";
import { Deconnection } from "./Deconnection";

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <div className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
      <div className='sidebar-header'>
        <Link to='/' className='sidebar-brand'>
          Associations-Nous!
        </Link>
      </div>
      <ul className='sidebar-menu'>
        <li className='sidebar-item'>
          <Link to='/mon-profil' className='sidebar-link'>
            Mon Profil
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
      </ul>
      <div className='sidebar-footer'>
        <Deconnection />
      </div>
    </div>
  );
};
