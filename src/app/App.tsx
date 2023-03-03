import { BrowserRouter, Route, Routes } from "react-router-dom";
// Import des composants utilisés pour chaque route
import { Connection } from "../authentification/Connection";
import { InscriptionAssociation } from "../authentification/InscriptionAssociation";
import { InscriptionDonor } from "../authentification/InscriptionDonor";
import { AssociationProject } from "../pages/AssociationProject";
import { DashboardAsso } from "../pages/DashboardAsso";
import { DashboardDonor } from "../pages/DashboardDonor";
import { Home } from "../pages/Home";

// Composant principal de l'application
export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Configuration de chaque route */}
          <Route path='/' element={<Home />} />
          <Route path='/inscription-donateur' element={<InscriptionDonor />} />
          <Route
            path='/inscription-association'
            element={<InscriptionAssociation />}
          />
          <Route path='/connection' element={<Connection />} />
          <Route path='/dashboardDonor' element={<DashboardDonor />} />
          <Route path='/dashboardAssociation' element={<DashboardAsso />} />
          <Route path='/association/:id' element={<AssociationProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
