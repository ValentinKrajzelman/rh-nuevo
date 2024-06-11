import { Navigate, Route, Routes } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import Navbar from "./componentes/navbar";
import Inicio from "./componentes/inicio/inicio";
import Dashboard from "./componentes/inicio/dashboard/dashboard";
import Solicitudes from "./componentes/solicitudes/solicitud/solicitudes";
import Confirmacion from "./componentes/solicitudes/confirmacion/confirmacion";


function App() {
  const [estado, setEstado] = useState(true);
  const ref = useRef(null);
  console.log(ref);

  useEffect(()=>{

    if(window.innerWidth >= 768){
      ref.current.style.padding = estado ? "0px 0px 0px 14rem" : '0px 0px 0px 0px';
    }
  },[estado])

  return (
    <div className={"flex relative w-screen"} ref={ref}>
      <Navbar estado={estado} setEstado={setEstado} className=""/>
      <Routes>
        <Route path="/rh-nuevo/*" element={<Inicio/>}> </Route>
        <Route path="/rh-nuevo/dashboard/*" element={<Dashboard/>}> </Route>
        <Route path="/rh-nuevo/solicitudes/*" element={<Solicitudes/>}> </Route>
        <Route path="/rh-nuevo/solicitudes/confirmacion/*" element={<Confirmacion/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
