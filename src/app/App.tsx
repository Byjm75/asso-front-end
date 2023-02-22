import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Connection } from "../authentification/Connection";
import { InscriptionAssociation } from "../authentification/InscriptionAssociation";
import { InscriptionDonor } from "../authentification/InscriptionDonor";
import { Home } from "../pages/Home";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/inscription-donateur' element={<InscriptionDonor />} />
          <Route
            path='/inscription-association'
            element={<InscriptionAssociation />}
          />
          <Route path='/connection' element={<Connection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
