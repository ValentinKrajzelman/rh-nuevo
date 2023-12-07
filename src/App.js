import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./componentes/navbar";
import Inicio from "./componentes/inicio";
import Dashboard from "./componentes/dashboard";

function App() {
  return (
    <div className="flex">
      <Navbar/>
      <Routes>
        <Route path="/rh-nuevo/inicio/*" element={<Inicio/>}> </Route>
        <Route path="/rh-nuevo/dashboard/*" element={<Inicio/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
