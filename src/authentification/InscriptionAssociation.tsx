import { useState, useEffect } from "react";
import "../authentification/InscriptionAssociation.css";

export const InscriptionAssociation = () => {
  useEffect(() => {
    document.title = "Inscription Association";
  }, []);

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [siret, setSiret] = useState("");
  const [rna, setRna] = useState("");
  const [theme, setTheme] = useState("");
  const [website, setWebsite] = useState("");
  const [body, setBody] = useState("");
  const [assets, setPhoto] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: handle form submission
  };
  return (
    <div className='container'>
      <div id='titre-asso' title='Inscription pour association'>
        <h1>Inscription Association</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-md-6 mb-3'>
            <label htmlFor='nom' className='form-label'>
              Nom
            </label>
            <input
              type='text'
              className='form-control'
              id='nom'
              placeholder='Nom de votre association'
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className='col-md-6 mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='nom@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 mb-3'>
            <label htmlFor='password' className='form-label'>
              Mot de passe
            </label>
            <input
              type='password'
              className='form-control'
              id='password'
              placeholder='Doit contenir au minimum 8 caractères'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='col-md-6 mb-3'>
            <label htmlFor='passwordConfirmation' className='form-label'>
              Confirmation du mot de passe
            </label>
            <input
              type='password'
              className='form-control'
              id='passwordConfirmation'
              placeholder='Ton mot de passe'
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 mb-3'>
            <label htmlFor='siret' className='form-label'>
              SIRET
            </label>
            <input
              type='text'
              className='form-control'
              id='siret'
              placeholder='Numéro de SIRET'
              value={siret}
              onChange={(e) => setSiret(e.target.value)}
            />
          </div>
          <div className='col-md-6 mb-3'>
            <label htmlFor='rna' className='form-label'>
              RNA
            </label>
            <input
              type='text'
              className='form-control'
              id='rna'
              placeholder='Numéro de RNA'
              value={rna}
              onChange={(e) => setRna(e.target.value)}
            />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 mb-3'>
            <label htmlFor='theme' className='form-label'>
              Thème
            </label>
            <input
              type='text'
              className='form-control'
              id='theme'
              placeholder='Thème de votre association'
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            />
          </div>
          <div className='col-md-6 mb-3'>
            <label htmlFor='website' className='form-label'>
              Site web
            </label>
            <input
              type='url'
              className='form-control'
              id='website'
              placeholder='Adresse de votre site web'
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
        </div>

        <div className='mb-3'>
          <label htmlFor='body' className='form-label'>
            Présentation de l'association
          </label>
          <textarea
            className='form-control'
            id='body'
            rows={5}
            placeholder='Présentez votre association'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className='mb-3'>
          <label htmlFor='photo' className='form-label'>
            Photo de profil
          </label>
          <input
            type='file'
            className='form-control'
            id='photo'
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>
      </form>
      <div className='row'>
        <div className='col-md-12'>
          <button type='submit' className='btn btn-primary btn-block'>
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  );
};
