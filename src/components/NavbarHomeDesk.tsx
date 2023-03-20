import { Link } from "react-router-dom";
import logo from "../assets/Asso2.png";
import "../components/NavbarHomeDesk.css";

export function NavbarDesktop() {
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
        title='cliquez pour y accéder'
        id='boutton-inscription-donateur'
      >
        <ul>
          <li className='nav-item'>
            <button type='button' className='btn btn-danger d-none d-lg-block'>
              <Link className='link' to='/inscription-donateur'>
                <span>Inscription Donateur</span>
              </Link>
            </button>
          </li>
        </ul>
      </div>
      <div
        className='d-flex align-items-center justify-content-center flex-grow-1'
        id='navbarDesktop-titre'
        title='Plateforme de mise en relation entre associations et donateurs'
      >
        <span>ASSOCIATIONS-NOUS !</span>
      </div>

      <div
        className='d-flex align-items-center justify-content-center flex-grow-1'
        title='cliquez pour y accéder'
        id='boutton-inscription-asso'
      >
        <ul>
          <li className='nav-item'>
            <button type='button' className='btn btn-danger d-none d-lg-block'>
              <Link className='link' to='/inscription-association'>
                <span> Inscription Association</span>
              </Link>
            </button>
          </li>
        </ul>
      </div>
      <div
        className='d-none d-lg-block'
        id='connection'
        title='cliquez pour y accéder'
      >
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='link' to='/connection'>
              <span>Se Connecter</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
