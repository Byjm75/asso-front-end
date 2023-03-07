import axios, { AxiosResponse } from "axios";
import jwtDecode from "jwt-decode";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { LeTokenDecode } from "../authentification/Connection";
import { Donor } from "./DashboardDonor";

export const EditDonor = () => {
  const [message, setMessage] = useState<string>();
  const pseudoElement = useRef<HTMLInputElement>(null);
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);
  const passwordConfirmElement = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const { id } = useParams();
  const [donor, setDonor] = useState<Donor>();

  useEffect(() => {
    document.title = "Modifier mon compte";
    axios
      .get(`http://localhost:8082/api/donor/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response: AxiosResponse) => {
        console.log(response);

        setDonor(response.data);
      });
  }, []);

  const HandleSubmitForm = async (e: FormEvent) => {
    console.log("handleSubmitForm");
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");

    axios
      .patch(
        `http://localhost:8082/api/donor/${id}`,
        {
          pseudo: pseudoElement.current?.value,
          email: emailElement.current?.value,
          password: passwordElement.current?.value,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((response: AxiosResponse<{ data: any }>) => {
        console.log("response ", response.data);
        alert("Profil mis à jour!");
        navigate("/dashboardDonor");
        window.location.reload();
      });
  };

  const handleDeleteAccount = () => {
    const confirmBox = window.confirm(
      "Voulez-vous vraiment supprimer votre compte?"
    );
    if (confirmBox === true) {
      axios
        .delete(`http://localhost:8082/api/donor/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          setTimeout(() => {
            navigate("/");
          }, 2000);
          setMessage("Le service a été définitivement supprimé");

          console.log(`Le service ${id} a bien été supprimé`);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className='container'>
      <div id='titre-donor' title='Modifier mes informations'>
        <h1>Modifier mes informations</h1>
      </div>
      <li key={donor?.id}></li>
      <form method='PATCH'>
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
      <button
        type='submit'
        className='btn btn-primary'
        onClick={HandleSubmitForm}
      >
        Modifier
      </button>
      <div>
        <button
          className='btn btn-primary profile-button col-md-12'
          type='button'
          onClick={handleDeleteAccount}
        >
          Supprimer mon compte
        </button>
        <div
          id='Modifier mon profil'
          title='Ici pour modifier mon profil'
        ></div>
      </div>
    </div>
  );
};
