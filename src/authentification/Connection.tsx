import axios, { AxiosResponse } from "axios";
import jwtDecode from "jwt-decode";
import { useState, useEffect, useRef, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "../authentification/Connection.css";

export interface LeTokenDecode {
  asso: any;
  donor: {
    id: string;
    pseudo: string;
    surname: string;
    firstname: string;
    email: string;
    password: string;
    role: string;
  };
  iat: string;
  exp: string;
}
export interface LeTokenDecodeAsso {
  asso: {
    id: string;
    name: string;
    email: string;
    siret: string;
    rna: string;
    theme: string;
    website: string;
    password: string;
    role: string;
  };
  iat: string;
  exp: string;
}

export const Connection = () => {
  useEffect(() => {
    document.title = "Se connecter";
  }, []);

  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);
  const [selectedOption, setSelectedOption] = useState("");

  const navigate = useNavigate();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8082/api/auth/login/${selectedOption}`, {
        email: emailElement.current?.value,
        password: passwordElement.current?.value,
      })
      .then((response: AxiosResponse) => {
        console.log("reponse requete", response.data);
        const token: string = response.data.accessToken;
        let leToken: any;
        if (token) {
          localStorage.setItem("accessToken", token);
          leToken = jwtDecode(token);
          alert("Bienvenue");

          setTimeout(() => {
            if (leToken.donor) {
              navigate("/dashboardDonor");
            }
            if (leToken.asso) {
              navigate("/dashboardAssociation");
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Combinaison adresse mail/ mot de passe non trouvée");
      });
  };
  return (
    <div className='container'>
      <div id='titre-connection' title='Connexion'>
        <h1>Se connecter</h1>
      </div>
      <form onSubmit={handleSubmitForm}>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            placeholder='email@example.com'
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
          <label htmlFor='role' className='form-label'>
            Type d'utilisateur
          </label>
          <div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                value='donor'
                defaultChecked
                checked={selectedOption === "donor"}
                onChange={handleOptionChange}
              />
              <label className='form-check-label' htmlFor='donor'>
                Donateur
              </label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='radio'
                value='association'
                onChange={handleOptionChange}
              />
              <label className='form-check-label' htmlFor='association'>
                Association
              </label>
            </div>
          </div>
        </div>
        <button
          type='submit'
          className='btn btn-primary'
          onClick={handleSubmitForm}
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};
