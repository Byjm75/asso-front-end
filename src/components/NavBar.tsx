import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Deconnection } from "./Deconnection";

export const Navbar = () => {
  return (
    <nav className='navbar sticky-top navbar-expand-lg shadow'>
      {/* Objet menu en responsive */}
      <div>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
      </div>

      <div className='d-flex align-items-center justify-content-center flex-grow-1'>
        <img
          src={logo}
          aria-hidden='true'
          alt=' logo du site Associations-Nous !'
          title='logo du site Associations-Nous !'
          width='90'
          height='55'
          id='logo'
          className='logo-css'
        />

        <div
          className='d-flex align-items-center justify-content-center flex-grow-1'
          title='Plateforme de mise en relation entre associations et donateurs'
          id='navbar-titre'
        >
          <span>ASSOCIATIONS-NOUS !</span>
        </div>

        <div className='d-flex align-items-center justify-content-center flex-grow-1'>
          <Deconnection />
        </div>
      </div>
    </nav>
  );
};
