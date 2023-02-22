import { useState, useEffect } from "react";
import "../authentification/Connection.css";

export const Connection = () => {
  useEffect(() => {
    document.title = "Se connecter";
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: handle form submission
  };

  return (
    <div className='container'>
      <div id='titre-connection' title='Connexion'>
        <h1>Se connecter</h1>
      </div>
      <form id='connection' onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            placeholder='email@example.com'
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
            placeholder='Ton mot de passe est à confirmer'
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Se connecter
        </button>
      </form>
    </div>
  );
};
