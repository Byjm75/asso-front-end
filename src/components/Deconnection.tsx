import React from "react";
import { Link } from "react-router-dom";

export const Deconnection = () => {
  return (
    <div id='deconnexion' title='cliquez pour vous déconnecter'>
      <Link to='/'>
        <span>Déconnexion</span>
      </Link>
    </div>
  );
};
