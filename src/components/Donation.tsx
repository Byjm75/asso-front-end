import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const Donation = () => {
  // Déclaration d'un useState pour gérer l'affichage de la modale
  const [show, setShow] = useState(false);

  // Fonction pour fermer la modale
  const handleClose = () => setShow(false);

  // Fonction pour ouvrir la modale
  const handleShow = () => setShow(true);

  // Déclaration de deux useState pour gérer le montant et la fréquence du don
  const [donationAmount, setDonationAmount] = useState(0);
  const [donationFrequency, setDonationFrequency] = useState("once");

  // Fonction pour mettre à jour le montant du don
  const handleAmountChange = (event: any) => {
    setDonationAmount(event.target.value);
  };

  // Fonction pour mettre à jour la fréquence du don
  const handleFrequencyChange = (event: any) => {
    setDonationFrequency(event.target.value);
  };

  return (
    <div>
      {/* Bouton qui ouvre la modale */}
      <Button variant='primary' onClick={handleShow}>
        Faire un don
      </Button>

      {/* Modale qui s'affiche lorsqu'on clique sur le bouton */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Faire un don</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Champ pour entrer le montant du don */}
          <p>Entrez le montant que vous souhaitez donner :</p>
          <input
            type='number'
            placeholder='Montant en euros'
            value={donationAmount}
            onChange={handleAmountChange}
          />

          {/* Boutons radio pour sélectionner la fréquence du don */}
          <p>Sélectionnez la fréquence de votre don :</p>
          <div>
            <input
              type='radio'
              id='once'
              name='donationFrequency'
              value='once'
              checked={donationFrequency === "once"}
              onChange={handleFrequencyChange}
            />
            <label htmlFor='once'>En 1 fois</label>
          </div>
          <div>
            <input
              type='radio'
              id='monthly'
              name='donationFrequency'
              value='monthly'
              checked={donationFrequency === "monthly"}
              onChange={handleFrequencyChange}
            />
            <label htmlFor='monthly'>Par mois</label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* Bouton pour fermer la modale */}
          <Button variant='secondary' onClick={handleClose}>
            Annuler
          </Button>

          {/* Bouton pour valider le don et fermer la modale */}
          <Button variant='primary' onClick={handleClose}>
            Valider
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
