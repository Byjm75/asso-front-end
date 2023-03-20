import axios from "axios";
import { useEffect, useRef, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../authentification/InscriptionAssociation.css";

export const InscriptionAssociation = () => {
  useEffect(() => {
    document.title = "Inscription Association";
  }, []);
  const [champManquant, setChampManquant] = useState<string>();
  const nameElement = useRef<HTMLInputElement>(null);
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);
  const passwordConfirmElement = useRef<HTMLInputElement>(null);
  const siretElement = useRef<HTMLInputElement>(null);
  const rnaElement = useRef<HTMLInputElement>(null);
  const themeElement = useRef<HTMLInputElement>(null);
  const websiteElement = useRef<HTMLInputElement>(null);
  const bodyElement = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    if (
      passwordElement.current?.value !== passwordConfirmElement.current?.value
    ) {
      console.log("password)))))))))", passwordElement.current?.value);

      alert("Les champs mot de passe et confirmation ne correspondent pas.");
    } else {
      axios
        .post("http://localhost:8082/api/auth/register/association", {
          name: nameElement.current?.value,
          email: emailElement.current?.value,
          siret: siretElement.current?.value,
          rna: rnaElement.current?.value,
          theme: themeElement.current?.value,
          password: passwordElement.current?.value,
        })
        .then((response) => {
          console.log(response);
          navigate("/connection");
        })
        .catch((err) => {
          console.error(err);
          if (
            !nameElement ||
            !emailElement ||
            !siretElement ||
            !rnaElement ||
            !themeElement ||
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
      <div id='titre-asso' title='Inscription pour association'>
        <h1>Inscription Association</h1>
      </div>
      <form onSubmit={handleSubmitForm}>
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
              ref={nameElement}
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
              ref={emailElement}
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
              ref={passwordElement}
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
              ref={passwordConfirmElement}
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
              ref={siretElement}
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
              ref={rnaElement}
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
              ref={themeElement}
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
              ref={websiteElement}
            />
          </div>
        </div>

        <div className='mb-3'>
          <label htmlFor='body' className='form-label'>
            Présentation de l'association
          </label>
          <input
            type='text'
            className='form-control'
            id='body'
            placeholder='Présentez votre association'
            ref={bodyElement}
          />
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
