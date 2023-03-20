// Importations de bibliothèques externes
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Association, Project } from "./DashboardAsso";
import "../pages/AssociationProject.css";
import { Donation } from "../components/Donation";
import { NavbarDesktop } from "../components/NavbarHomeDesk";
import { Navbar } from "../components/NavBar";

export const AssociationProject = () => {
  const { id } = useParams();
  const [association, setAssociation] = useState<Association>();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    document.title = "Donation";
    axios
      .get(`http://localhost:8082/api/association/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response: AxiosResponse) => {
        console.log(response);
        setAssociation(response.data);
      });
  }, [id]); // La dépendance "id" signifie que le Hook useEffect sera réexécuté chaque fois que l'ID change

  return (
    <div>
      <Navbar />
      <div className='main-panel'>
        <div className='association-body'>
          <div className='association-header'>
            Bienvenue sur la page de {association?.name}
          </div>
          <div className='association-projects'>
            <h3>Projets de l'association :</h3>
            <ul>
              {association?.projects.map(
                (
                  project: Project // Parcours les projets de l'association, s'ils existent, et affiche les informations de chaque projet
                ) => (
                  <li key={project.id}>
                    {/* Utilise l'ID du projet comme clé pour les éléments de liste */}
                    <span id='titre-projet'> {project.topic}</span> <br />
                    {/* Affiche le titre du projet */}
                    <span id='body-projet'>{project.body} </span> <br />
                    {/* Affiche la description du projet */}
                    <Donation id={project.id} />
                    {/* Affiche le composant Donation pour permettre les dons */}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
