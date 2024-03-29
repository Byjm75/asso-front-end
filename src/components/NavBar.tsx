import logo from "../assets/Asso2.png";
import { Deconnection } from "./Deconnection";
import "../components/NavBar.css";

export const Navbar = () => {
  return (
    <nav className='navbar sticky-top navbar-expand-lg shadow'>
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

        <div
          id='deconnection'
          className='d-flex align-items-center justify-content-center flex-grow-2'
        >
          <div>
            <Deconnection />
          </div>
        </div>
      </div>
    </nav>
  );
};
