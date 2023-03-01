import { useEffect, useRef, FormEvent, useState } from "react";
import "../authentification/InscriptionDonor.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const InscriptionDonor = () => {
  useEffect(() => {
    document.title = "Inscription Donateur";
  }, []);
  const [champManquant, setChampManquant] = useState<string>();
  const pseudoElement = useRef<HTMLInputElement>(null);
  const surnameElement = useRef<HTMLInputElement>(null);
  const firstNameElement = useRef<HTMLInputElement>(null);
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);
  const passwordConfirmElement = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmitForm = (e: FormEvent) => {
    console.log("---!!!", handleSubmitForm);
    e.preventDefault();
    console.log("button form clicked");
    console.log(emailElement.current?.value);
    console.log(pseudoElement.current?.value);
    console.log(surnameElement.current?.value);
    console.log(firstNameElement.current?.value);
    console.log(passwordConfirmElement.current?.value);
    console.log(passwordElement.current?.value);
    if (
      passwordElement.current?.value !== passwordConfirmElement.current?.value
    ) {
      console.log("password)))))))))", passwordElement.current?.value);

      alert("Les champs mot de passe et confirmation ne correspondent pas.");
    } else {
      axios
        .post("http://localhost:8082/api/auth/register/donor", {
          pseudo: pseudoElement.current?.value,
          surname: surnameElement.current?.value,
          firstname: firstNameElement.current?.value,
          email: emailElement.current?.value,
          password: passwordElement.current?.value,
        })
        .then((response) => {
          console.log(response);
          navigate("/connection");
        })
        .catch((err) => {
          console.error(err);
          if (
            !pseudoElement ||
            !surnameElement ||
            !firstNameElement ||
            !emailElement ||
            passwordElement
          ) {
            setChampManquant("Veuillez remplir tous les champs !");
          } else if (err.response.data.message) {
            setChampManquant(err.response.data.message);
          }
        });
    }
  };
  return (
    <div className='container'>
      <div id='titre-donor' title='Inscription pour futur Donateur'>
        <h1>Inscription Donateur</h1>
      </div>
      <form method='POST' onSubmit={handleSubmitForm}>
        <div className='row'>
          <div className='mb-3'>
            <label htmlFor='pseudo' className='form-label'>
              Pseudo
            </label>
            <input
              type='text'
              className='form-control'
              id='pseudo'
              placeholder='Ton Pseudo'
              ref={pseudoElement}
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
              ref={surnameElement}
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
              ref={firstNameElement}
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
              ref={emailElement}
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
              ref={passwordElement}
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
              ref={passwordConfirmElement}
            />
          </div>
        </div>
      </form>
      <span className='messageDynamique'>{champManquant}</span>
      <button
        type='submit'
        className='btn btn-primary'
        onClick={handleSubmitForm}
      >
        S'inscrire
      </button>
    </div>
  );
};
