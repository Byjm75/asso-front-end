// Importations de bibliothèques externes
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Association, Project } from "./DashboardAsso";
import "../pages/AssociationProject.css";
import { Donation } from "../components/Donation";

// Déclaration d'un composant fonctionnel AssociationProject
export const AssociationProject = () => {
  const { id } = useParams(); // Récupération de l'ID de l'association depuis les paramètres de l'URL
  const [association, setAssociation] = useState<Association>(); // Définition d'un état pour l'association courante, initialisé à null
  const [projects, setProjects] = useState([]); // Définition d'un état pour les projets de l'association, initialisé à un tableau vide

  // Utilisation du Hook useEffect pour exécuter du code après le montage du composant
  useEffect(() => {
    // Effectue une requête GET pour récupérer les informations de l'association correspondant à l'ID
    axios
      .get(`http://localhost:8082/api/association/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Ajout du token JWT dans l'en-tête de la requête pour l'authentification
        },
      })
      .then((response: AxiosResponse) => {
        // Si la requête est réussie
        console.log(response); // Affiche la réponse dans la console du navigateur
        setAssociation(response.data); // Met à jour l'état de l'association avec les données reçues
      });
  }, [id]); // La dépendance "id" signifie que le Hook useEffect sera réexécuté chaque fois que l'ID change

  // Rendu du composant
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='main-panel'>
        <div className='association-body'>
          <div className='association-header'>
            Bienvenue sur la page de {association?.name}
            {/* Affiche le nom de l'association, s'il est défini */}
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
                    <Donation />
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
