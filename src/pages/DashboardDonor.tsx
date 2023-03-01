import axios, { AxiosResponse } from "axios";
import React, { useEffect, useRef, useState } from "react";
import jwtDecode from "jwt-decode";

import { Navbar } from "../components/NavBar";
import { Sidebar } from "../components/SidebarDashboard";
import { LeTokenDecode } from "../authentification/Connection";

export interface Donor {
  id: string;
  pseudo: string;
  surname: string;
  firstname: string;
  email: string;
}

let dataDonor: Donor[] = [];
export const DashboardDonor = () => {
  useEffect(() => {
    document.title = "Mon Dashboard";
  }, []);

  // const pseudoElement = useRef<HTMLInputElement>(null);
  // const surnameElement = useRef<HTMLInputElement>(null);
  // const firstnameElement = useRef<HTMLInputElement>(null);
  // const emailElement = useRef<HTMLInputElement>(null);
  const [donor, setDonor] = useState<Donor>();

  useEffect(() => {
    // Récupérer les informations du donateur depuis le serveur et les stocker dans l'état
    const token = localStorage.getItem("accessToken");
    console.log("accessToken=", token);

    if (token) {
      const tokenId: LeTokenDecode = jwtDecode(token);
      console.log("tokenDecoded--------------!!!!!!!!!!!", tokenId);
      axios
        .get(`http://localhost:8082/api/donor/${tokenId.donor.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((response: AxiosResponse) => {
          console.log(response);
          dataDonor = response.data;
          setDonor(response.data);
        });
    }
  }, []);
  // console.log("donorId=", donor);

  return (
    <div className='main-panel'>
      <Navbar />
      <div className='wrapper'>
        <div className='row'>
          <div className='col-md-3'>
            <Sidebar
              handleLogout={function () {
                throw new Error("Function not implemented.");
              }}
            />
            <div className='col-md-9'>
              <div className='content'>
                <div className='container-fluid'>
                  <div className='card'>
                    <div className='card-header'>
                      <h4 className='card-title'>Mes informations</h4>
                    </div>
                    <div className='card-body'>
                      {donor ? (
                        <ul>
                          <li>Pseudo : {donor.pseudo}</li>
                          <li>Nom : {donor.surname}</li>
                          <li>Prénom : {donor.firstname}</li>
                          <li>Email : {donor.email}</li>
                        </ul>
                      ) : (
                        <p>Chargement des informations...</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
