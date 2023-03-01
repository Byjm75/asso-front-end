import axios, { AxiosResponse } from "axios";
import React, { useEffect, useRef, useState } from "react";
import jwtDecode from "jwt-decode";
import { Navbar } from "../components/NavBar";
import { Sidebar } from "../components/SidebarDashboard";
import { LeTokenDecode } from "../authentification/Connection";
import "../pages/DashboardAsso.css";
import { Research } from "../components/Research";

export interface Association {
  id: string;
  name: string;
  email: string;
  siret: string;
  rna: string;
  theme: string;
  website: string;
}

let dataAsso: Association[] = [];
export const DashboardAsso = () => {
  useEffect(() => {
    document.title = "Dashboard de mon association";
  }, []);

  const [asso, setAsso] = useState<Association>();

  useEffect(() => {
    // Récupérer les informations du donateur depuis le serveur et les stocker dans l'état
    const token = localStorage.getItem("accessToken");
    console.log("accessToken=", token);

    if (token) {
      const tokenId: LeTokenDecode = jwtDecode(token);
      console.log("tokenDecoded--------------!!!!!!!!!!!", tokenId);
      axios
        .get(`http://localhost:8082/api/association/${tokenId.asso.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((response: AxiosResponse) => {
          console.log(response);
          dataAsso = response.data;
          setAsso(response.data);
        });
    }
  }, []);

  return (
    <div className='main-panel'>
      <Navbar />
      <div className='row'>
        <div className='col-md-3'>
          <Sidebar
            handleLogout={function () {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
        <div className='col-md-9'>
          <div className='content'>
            <div className='container-fluid'>
              <h4 className='title'>Mes informations</h4>
              <div className='body'>
                {asso ? (
                  <ul>
                    <li>Nom : {asso.name}</li>
                    <li>Email : {asso.email}</li>
                    <li>Siret : {asso.siret}</li>
                    <li>Rna : {asso.rna}</li>
                    <li>Thème : {asso.theme}</li>
                    <li>Website : {asso.website}</li>
                  </ul>
                ) : (
                  <p>Chargement des informations...</p>
                )}
              </div>
              <div className='col-md-9'>
                <div className='content'>
                  <div className='container-fluid'>
                    <h4 className='title'>Recherchez une association</h4>
                    <Research theme={[]} />
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
