import { useState, useEffect } from "react";
import "../authentification/InscriptionDonor.css";

export const InscriptionDonor = () => {
  useEffect(() => {
    document.title = "Inscription Donateur";
  }, []);

  const [pseudo, setPseudo] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [assets, setPhoto] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: handle form submission
  };
  return (
    <div className='container'>
      <div id='titre-donor' title='Inscription pour futur Donateur'>
        <h1>Inscription Donateur</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='pseudo' className='form-label'>
            Pseudo
          </label>
          <input
            type='text'
            className='form-control'
            id='pseudo'
            placeholder='Ton Pseudo'
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='nom' className='form-label'>
            Nom
          </label>
          <input
            type='text'
            className='form-control'
            id='nom'
            placeholder='Ton nom de famille'
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='prenom' className='form-label'>
            Prénom
          </label>
          <input
            type='text'
            className='form-control'
            id='prenom'
            placeholder='Ton prénom'
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>
        <div className='mb-3'>
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
        <div className='mb-3'>
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
        <div className='mb-3'>
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
        <button type='submit' className='btn btn-primary'>
          S'inscrire
        </button>
      </form>
    </div>
  );
};
