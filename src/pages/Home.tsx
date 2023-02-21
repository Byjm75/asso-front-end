import "../pages/Home.css";
import logo from "../assets/Asso2.png";
import { Container, Row, Col } from "react-bootstrap";

export const Home = () => {
  return (
    <div>
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
            title='cliquez pour y accéder'
            id='boutton-inscription'
          >
            <button type='button' className='btn btn-danger'>
              <a href='#' />
              <span>Inscription Donateur</span>
            </button>
          </div>

          <div
            className='d-flex align-items-center justify-content-center flex-grow-1'
            id='navbar-titre'
            title='Plateforme de mise en relation entre associations et donateurs'
          >
            <span>ASSOCIATIONS-NOUS !</span>
          </div>
          <div
            className='d-flex align-items-center justify-content-center flex-grow-1'
            title='cliquez pour y accéder'
            id='boutton-inscription'
          >
            <button type='button' className='btn btn-danger'>
              <a href='*' />
              <span> Inscription Association</span>
            </button>
          </div>
          <div id='connection' title='cliquez pour y accéder'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='*' />
                <span>Mon compte</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <body className='background-image'>
        <Container className='page-accueil'>
          <Row>
            <Col id='introduction'>
              <p>
                <strong>Associations-Nous</strong> est la plateforme idéale pour
                faire des dons en ligne de manière simple, sécurisée et
                efficace. <br />
                En choisissant "Solidarité pour tous" sur notre site, Sophie a
                pu sélectionner le projet qui lui tenait le plus à cœur et
                suivre son évolution en temps réel. <br />
                <strong>Associations-Nous</strong> garantit la transparence et
                la traçabilité de chaque projet pour que les donateurs puissent
                voir l'impact réel de leur contribution sur la société.
                Rejoignez-nous pour contribuer à un avenir meilleur pour tous !
              </p>
            </Col>
          </Row>
          <Row>
            <Col id='personae'>
              <h2>
                <strong>Sophie 35 ans Enseignante</strong>
              </h2>
              <p>
                Sophie est une altruiste qui croit en l'importance d'aider les
                personnes dans le besoin. Malgré son salaire modeste, elle
                consacre une partie de son temps libre à faire du bénévolat dans
                des associations caritatives, en particulier celles qui aident
                les enfants en difficulté scolaire et les personnes âgées
                confrontées à des défis dans notre société. Elle recherche une
                plateforme de dons en ligne simple, sécurisée et proposant une
                sélection variée et pertinente de projets humanitaires ayant un
                impact positif sur la société. Elle souhaite soutenir des
                projets qui contribuent à résoudre des problèmes sociaux tels
                que l'exclusion sociale, la pauvreté et le manque d'accès à
                l'éducation.
              </p>
              <p>
                Sophie veut que ses dons aient un impact réel et croit en la
                transparence des projets humanitaires.
                <strong>Associations-Nous</strong> offre des projets variés,
                transparents et traçables, permettant de suivre l'évolution en
                temps réel. Sophie a choisi cette plateforme pour sa fiabilité
                et son efficacité dans la lutte contre les problèmes sociaux.
                Elle est rassurée de savoir que son don est utilisé de manière
                responsable et efficace pour contribuer à un avenir meilleur
                pour la société.
              </p>
            </Col>
            <Col id='asso'>
              <h2 id='titre-1'>
                <strong>Association "Solidarité pour tous"</strong>
              </h2>
              <h3>
                <strong>Aide aux personnes</strong>
              </h3>
              <p>
                Notre but est d'améliorer la qualité de vie des personnes
                défavorisées en leur offrant un accompagnement social et des
                services de base, tels que l'accès à la nourriture, à
                l'hébergement et aux soins de santé. Nous cherchons également à
                sensibiliser le public aux problèmes de pauvreté et à aider les
                personnes en situation de précarité à améliorer leur situation.
              </p>
              <p>
                <strong>
                  Grace à Vous et à Associations-Nous ! Vous pouvez maintenant
                  faire dons directement aux projets qui vous tiennent à coeur.
                </strong>
              </p>
              <h2 id='titre-2'>
                <strong>Nos projets</strong>
              </h2>
              <ul>
                <li>
                  <h5>
                    <strong>"Un Logement pour tous"</strong>
                  </h5>
                  <p>
                    A pour but d'aider les personnes sans domicile fixe ou en
                    situation de précarité à accéder à un logement stable. Vos
                    dons à ce projet permet de financer la rénovation de
                    logements.
                  </p>
                </li>
                <li>
                  <h5>
                    <strong>"Soutien scolaire pour les enfants"</strong>
                  </h5>
                  <p>
                    A pour objectif d'aider les enfants qui ont des difficultés
                    scolaires à réussir leurs études. En faisant un don à ce
                    projet, vous soutenez le financement du soutien scolaire.
                  </p>
                </li>
                <li>
                  <h5>
                    <strong>"Soutien aux personnes âgées"</strong>
                  </h5>
                  <p>
                    A pour but d'assister les personnes âgées à maintenir leur
                    qualité de vie et à vivre de manière autonome. Votre soutien
                    à ce projet permettra également d'assister les
                    aides-soignants.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center align-items-center'>
              <button
                type='button'
                className='btn btn-danger'
                title='cliquez pour y accéder'
                id='boutton-inscription'
              >
                <a className='navbar-brand' href='*' />
                <span>Inscription Donateur</span>
              </button>
            </Col>
            <Col className='d-flex justify-content-center align-items-center'>
              <button
                type='button'
                className='btn btn-danger'
                title='cliquez pour y accéder'
                id='boutton-inscription'
              >
                <a className='navbar-brand' href='*' />
                <span>Inscription Association</span>
              </button>
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
};

{
  /* <a className='form-asso navbar-brand' href='*'></a> */
}

// xs={12}
// sm={6}
// md={6}
