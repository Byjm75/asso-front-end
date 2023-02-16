import "../pages/Home.css";
import logo from "../assets/Asso2.png";
import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {
  return (
    <div>
      <nav id='test' className='navbar sticky-top navbar-expand-lg shadow'>
        <div className='container-fluid'>
          <div>
            <img
              src={logo}
              aria-hidden='true'
              alt=' logo du site Associations-Nous !'
              title='logo du site Associations-Nous !'
              width='70'
              height='50'
              className='d-inline-block align-text-top me-2'
              id='navbarLogo'
            />
          </div>
          <div
            className='collapse navbar-collapse justify-content-center'
            id='navbarInscriptionDonateur'
            title='cliquez pour y accéder'
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Inscription Donateur
                </a>
              </li>
            </ul>
          </div>
          <div
            className='d-flex align-items-center justify-content-center flex-grow-1'
            id='navbarTitre'
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <div
                  className='navbar-brand mb-0 h1'
                  title='Plateforme de mise en relation entre associations et donateurs'
                >
                  <span>ASSOCIATIONS-NOUS !</span>
                </div>
              </li>
            </ul>
          </div>
          {/* Objet menu en responsive */}
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
          <div
            className='collapse navbar-collapse justify-content-center'
            id='navbarLinkAsso'
            title='cliquez pour y accéder'
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Inscription Association
                </a>
              </li>
            </ul>
          </div>
          <div id='navbarConnect' title='cliquez pour y accéder'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Mon compte
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <body className='background-image'>
          <Container className='text-container'>
            <Row>
              <Col xs={12} md={6}>
                <h2>Association "Solidarité pour tous"</h2>
                <br />
                <p>Aide aux personnes défavorisées</p>
                <p>
                  Notre objectif est d'améliorer les conditions de vie des
                  personnes défavorisées et de sensibiliser la population aux
                  problèmes de pauvreté. Aider les personnes en situation de
                  précarité à améliorer leur qualité de vie en leur offrant un
                  accompagnement social et des services de base tels que l'accès
                  à la nourriture, à l'hébergement et à la santé.
                </p>
                <p>
                  Nos équipes de bénévoles et de salariés sont présent dans
                  plusieurs villes françaises, avec des centres d'action dans
                  les quartiers les plus défavorisés.
                </p>
                <p>
                  Grace à Vous et à Associations-Nous ! Vous pouvez maintenant
                  faire dons directement aux projets qui vous tiennes à coeur.
                </p>
                <h2> Nos projets</h2>
                <br />
                <ul>
                  <li>
                    "Un Logement pour tous": Ce projet vise à aider les
                    personnes sans abri ou en situation de précarité à trouver
                    un logement stable. En faisant dons à se projet, vous
                    soutenez la rénovation de logement !
                  </li>
                  <br />
                  <li>
                    "Soutien scolaire pour les enfants": Ce projet vise à aider
                    les enfants en difficulté scolaire à réussir leurs études.
                    En faisant dons à se projet, vous financez le soutien
                    scolaire !
                  </li>
                  <br />
                  <li>
                    "Soutien aux personnes âgées": Ce projet vise à aider les
                    personnes âgées à vivre de manière autonome et à maintenir
                    leur qualité de vie. Ici vous assurez votre soutien aux
                    aides soignants !
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <h2>Persona donateur</h2>
                <p>
                  Ici vous pouvez faire un don à l'un des projets de
                  l'association "Solidarité pour tous".
                </p>
              </Col>
            </Row>
          </Container>
        </body>
      </div>
    </div>
  );
};
