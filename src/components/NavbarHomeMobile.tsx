import { Link } from "react-router-dom";
import logo from "../assets/Asso2.png";
import "./NavbarHomeMobile.css";

export function NavbarMobile() {
  return (
    <nav className='navbar sticky-top navbar-expand-lg shadow'>
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
        id='navbarMobile-titre'
        title='Plateforme de mise en relation entre associations et donateurs'
      >
        <span>ASSOCIATIONS-NOUS !</span>
      </div>

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

      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav flex-grow-1 justify-content-end'>
          <li className='nav-item'>
            <Link to='http://localhost:3000/inscription-donateur'>
              <button type='button' className='btn btn-danger'>
                <span>Inscription Donateur</span>
              </button>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='http://localhost:3000/inscription-association'>
              <button type='button' className='btn btn-danger'>
                <span>Inscription Association</span>
              </button>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/connection'>
              <button type='button'>
                <span>Se Connecter</span>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
