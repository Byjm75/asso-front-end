import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* On utilise notre composant dans notre JSX */}
        {/* <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<Details />} />
          <Route path='/inscription' element={<Signup />} />
          <Route path='/connexion' element={<Login />} />
          <Route path='/allusers' element={<ListUser />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
};
