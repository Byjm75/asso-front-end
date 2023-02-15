import logo from "../assets/photologo.jpg";

export const Home = () => {
  return (
    <nav className='navbar sticky-top navbar-expand-lg bg-light shadow'>
      <div className='container-fluid'>
        <img src={logo} alt='Bootstrap' width='60' height='40' />
        ASSOCIATIONS-NOUS !
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Details
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
// return (

//   // <nav className='navbar fixed-top bg-body-tertiary'>
//   //   <div className='container-fluid d-flex'>
//   //     <img src={logo} alt='Bootstrap' width='30' height='24' />
//   //     <h1>ASSOCIATIONS-NOUS !</h1>
//   //   </div>
//   // </nav>
// );
