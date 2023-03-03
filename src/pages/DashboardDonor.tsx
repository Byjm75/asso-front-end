import axios, { AxiosResponse } from "axios";
import React, { useEffect, useRef, useState } from "react";
import jwtDecode from "jwt-decode";
import { Navbar } from "../components/NavBar";
import { Sidebar } from "../components/SidebarDashboard";
import { LeTokenDecode } from "../authentification/Connection";
import "../pages/DashboardDonor.css";
import { Research } from "../components/Research";
import { theme } from "../assets/Theme";
import { Link, useParams } from "react-router-dom";

export interface Donor {
  id: string;
  pseudo: string;
  surname: string;
  firstname: string;
  email: string;
}
export interface Association {
  id: string;
  name: string;
  theme: string;
  description: string;
}

let dataDonor: Donor[] = [];
let dataAssociations: Association[] = [];

export const DashboardDonor = () => {
  useEffect(() => {
    document.title = "Mon Dashboard";
  }, []);

  const [donor, setDonor] = useState<Donor>();
  const [associations, setAssociations] = useState<Association[]>([]);

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

      axios
        .get(`http://localhost:8082/api/association`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((response: AxiosResponse) => {
          console.log(response);
          dataAssociations = response.data;
          setAssociations(response.data);
        });
      const associationId = "idAssociation";
      axios
        .get(`http://localhost:8082/api/association/${associationId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((response: AxiosResponse) => {
          console.log(response);
          dataAssociations = response.data;
          setAssociations(response.data);
        });
    }
  }, []);
  let tabFilter: Association[] | boolean = [];
  const theme = useRef<HTMLSelectElement>(null);
  const [valueSelect, setValueSelect] = useState<string>("");
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.value, " : la value");
    console.log(associations[0].theme.trimEnd(), " : les asso");

    setValueSelect(e.currentTarget.value);

    console.log(tabFilter, "tabFilter");
  };

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
              <div className='col-md-9'>
                <div className='content'>
                  <div className='container-fluid'>
                    <h4 className='title'>Recherchez une association</h4>
                    {/* debut select */}
                    <select
                      className='form-select'
                      aria-label='Default select example'
                      onChange={handleSelect}
                    >
                      <option value='' selected>
                        Choissez un thème
                      </option>
                      <option value='Ecologie'>Ecologie</option>
                      <option value='Aide sociale'>Aide sociale</option>
                      <option value='Protection animale'>
                        Protection animale
                      </option>
                      <option value='Aide aux personnes en situation de handicap'>
                        Aide aux personnes en situation de handicap
                      </option>
                      <option value='Solidarité internationale'>
                        Solidarité internationale
                      </option>
                      <option value='Alimentation et agriculture durable'>
                        Alimentation et agriculture durable
                      </option>
                      <option value='Entraide et bénévolat'>
                        Entraide et bénévolat
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='col-md-9'>
                <div className='content'>
                  <div className='container-fluid'>
                    <h4 className='title'>Associations</h4>
                    <div>
                      <ul>
                        {associations
                          .filter((asso) =>
                            asso.theme.trimEnd().includes(valueSelect)
                          )
                          .map((asso) => (
                            <li>
                              <Link to={`/association/${asso.id}`}>
                                {asso.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
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
