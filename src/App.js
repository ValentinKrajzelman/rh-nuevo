import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./componentes/navbar";
import Inicio from "./componentes/inicio";
import Dashboard from "./componentes/dashboard/dashboard";

function App() {
  return (
    <div className="flex">
      <Navbar/>
      <Routes>
        <Route path="/rh-nuevo/*" element={<Inicio/>}> </Route>
        <Route path="/rh-nuevo/dashboard/*" element={<Dashboard/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
