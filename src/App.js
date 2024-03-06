import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/navbar";
import Inicio from "./componentes/inicio";
import Dashboard from "./componentes/dashboard/dashboard";
import { useState, useRef, useEffect } from "react";


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
    <div className={"flex relative"} ref={ref}>
      <Navbar estado={estado} setEstado={setEstado} className=""/>
      <Routes>
        <Route path="/rh-nuevo/*" element={<Inicio/>}> </Route>
        <Route path="/rh-nuevo/dashboard/*" element={<Dashboard/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
