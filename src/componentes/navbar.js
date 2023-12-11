import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const Navbar = () => {
  const [estado, setEstado] = useState(true);
  const [user, setUser] = useState({});

  let location = useLocation();

  useEffect(() => {
    let urlParams = new URLSearchParams(window.location.search);
    let nombre = urlParams.get("a");
    let apellido = urlParams.get("b");
    let legajo = urlParams.get("c");
    setUser({
      nombre: nombre,
      apellido: apellido,
      legajo: legajo,
    });
  }, [location]);

  return (
    <div className={`w-[15rem] ${estado ? "" : "w-[0rem]"}`}>
      <div className="fixed flex items-start">
        <button
          className="order-2 w-1"
          onClick={() => {
            setEstado(!estado);
          }}
        >
          <img
            className={`min-w-[2rem] m-5 ${estado ? "rotate-180" : ""}`}
            src="/rh-nuevo/flecha.png"
          ></img>
        </button>

        <div
          className={`min-h-screen transition-all bg-[#B7B9BD] ${
            estado ? "" : "hidden"
          }`}
        >
          <div className="relative  h-full min-w-[15rem] w-[20%]">
            <div className="flex flex-col w-full border-b-2 border-black p-[1rem]">
              Mercomax - R.H
            </div>
            <div className="flex flex-col items-center w-full p-[1rem] border-b-2 border-black">
              <div className="w-28 h-28">
                <img
                  src={
                    "https://mmxapp2.mercomaxsa.com.ar/recibos/legajos/M" +
                    user.legajo +
                    ".jpg"
                  }
                ></img>
              </div>
              <div>
                <div>{user.nombre},</div>
                <div>{user.apellido}</div>
              </div>
            </div>
            <div className="flex flex-col w-full border-b-2 border-black">
              <a
                href={"https://mmxapp2.mercomaxsa.com.ar/rh-nuevo/?a="+user.nombre+"&b="+user.apellido+"&c="+user.legajo}
                className="w-full  p-1 flex"
              >
                <img className="w-10" src="/rh-nuevo/nuevo-icon (2).svg" alt="asdf" />
                <div className="pl-6">Inicio </div>
              </a>
              <a
                href="https://mmxapp2.mercomaxsa.com.ar/rh/themes/mis_datos.php"
                className="w-full  p-1 flex"
              >
                <img className="w-10" src="/rh-nuevo/nuevo-icon (3).svg" alt="asdf" />
                <div className="pl-6">Mis datos</div>
              </a>
              <a
                href="https://mmxapp2.mercomaxsa.com.ar/rh/themes/consultas.php"
                className="w-full  p-1 flex"
              >
                <img className="w-10" src="/rh-nuevo/nuevo-icon (4).svg" alt="asdf" />
                <div className="pl-6">Mensajes</div>
              </a>
              <a
                href="https://mmxapp2.mercomaxsa.com.ar/rh/themes/mis_recibos_sueldos.php"
                className="w-full  p-1 flex"
              >
                <img className="w-10" src="/rh-nuevo/nuevo-icon (5).svg" alt="asdf" />
                <div className="pl-6">Recibos de sueldo</div>
              </a>
              <a
                href="https://mmxapp2.mercomaxsa.com.ar/rh/biblio/Biblioteca.htm"
                className="w-full  p-1 flex"
              >
                <img
                  className="w-10 p-[0.6rem]"
                  src="/rh-nuevo/nuevo-icon (10).svg"
                  alt="asdf"
                />
                <div className="pl-6">Biblioteca BD</div>
              </a>
              <a
                href="https://mmxapp2.mercomaxsa.com.ar/rh/themes/carga_novedades.php"
                className="w-full  p-1 flex"
              >
                <img
                  className="w-10 p-[0.6rem]"
                  src="/rh-nuevo/nuevo-icon (9).svg"
                  alt="asdf"
                />
                <div className="pl-6">Dashboard</div>
              </a>
              <a
                href="https://mmxapp2.mercomaxsa.com.ar/rh/themes/carga_inasistencias.php"
                className="w-full  p-1 flex"
              >
                <img className="w-10" src="/rh-nuevo/nuevo-icon (6).svg" alt="asdf" />
                <div className="pl-6">Inasistencias</div>
              </a>
              <a
                href="https://mmxapp2.mercomaxsa.com.ar/rh/themes/internos.php"
                className="w-full  p-1 flex"
              >
                <img className="w-10" src="/rh-nuevo/nuevo-icon (7).svg" alt="asdf" />
                <div className="pl-6">Internos</div>
              </a>
              <a
                href="https://mmxapp2.mercomaxsa.com.ar/rh/themes/referidos.php"
                className="w-full  p-1 flex"
              >
                <img className="w-10" src="/rh-nuevo/nuevo-icon (8).svg" alt="asdf" />
                <div className="pl-6">Referidos</div>
              </a>
            </div>

            <a
              href="https://mmxapp2.mercomaxsa.com.ar/rh/include/cerrar_sesion.php"
              className="w-full  p-1 flex"
            >
              <img
                className="w-10"
                src="/rh-nuevo/nuevo-icon (1).svg"
                alt="asdf"
                width="40"
                height="40"
              />
              <div className="pl-6">Cerrar sesion</div>
            </a>

            {/* <div className="absolute top-4 right-4">abrir</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
