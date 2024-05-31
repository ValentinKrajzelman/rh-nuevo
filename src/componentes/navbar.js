import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const Navbar = ({estado, setEstado}) => {
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
    <div className="absolute top-0 left-0 z-50">
      <div className="h-screen relative">
        <div className="absolute">
          <button
            className=""
            onClick={() => {
              setEstado(!estado);
            }}
          >
            <img
              className={`w-[1.5rem] m-5 ${estado ? "hidden" : "block"}`}
              src="/rh-nuevo/hamburgesa.png"
            ></img>
          </button>
        </div>
        <div
          className={`w-[15rem] fixed flex items-start ${
            estado ? "" : "w-[0rem]"
          }`}
        >
          <div className="relative w-full h-full">
            <div className="top-0 left-0 absolute z-50">
              <div
                className={`h-screen overflow-y-scroll transition-all noScrollbar bg-[#B7B9BD] ${
                  estado ? "" : "hidden"
                }`}
              >
                <div className="relative  h-full min-w-[15rem] w-[20%]">
                  <div className="flex items-center pr-8 justify-between w-full border-b-2 border-black p-[1rem]">
                    Mercomax - R.H
                    <button
                      className="w-[1.5rem]"
                      onClick={() => {
                        setEstado(!estado);
                      }}
                    >
                      <img
                        className={`min-w-[1.5rem] w-[1.5rem] m-5 ${
                          estado ? "rotate-180" : ""
                        }`}
                        src="/rh-nuevo/hamburgesa.png"
                      ></img>
                    </button>
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
                      href={
                        "https://mmxapp2.mercomaxsa.com.ar/rh-nuevo/?a=" +
                        user.nombre +
                        "&b=" +
                        user.apellido +
                        "&c=" +
                        user.legajo
                      }
                      className="w-full  p-1 flex"
                    >
                      <img
                        className="w-10"
                        src="/rh-nuevo/nuevo-icon (2).svg"
                        alt="asdf"
                      />
                      <div className="pl-6">Inicio </div>
                    </a>
                    <a
                      href="https://mmxapp2.mercomaxsa.com.ar/rh/themes/mis_datos.php"
                      className="w-full  p-1 flex"
                    >
                      <img
                        className="w-10"
                        src="/rh-nuevo/nuevo-icon (3).svg"
                        alt="asdf"
                      />
                      <div className="pl-6">Mis datos</div>
                    </a>
                    <a
                      href="https://mmxapp2.mercomaxsa.com.ar/rh/themes/consultas.php"
                      className="w-full  p-1 flex"
                    >
                      <img
                        className="w-10"
                        src="/rh-nuevo/nuevo-icon (4).svg"
                        alt="asdf"
                      />
                      <div className="pl-6">Mensajes</div>
                    </a>
                    <a
                      href="https://mmxapp2.mercomaxsa.com.ar/rh/themes/mis_recibos_sueldos.php"
                      className="w-full  p-1 flex"
                    >
                      <img
                        className="w-10"
                        src="/rh-nuevo/nuevo-icon (5).svg"
                        alt="asdf"
                      />
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
                      href={
                        "https://mmxapp2.mercomaxsa.com.ar/rh-nuevo/dashboard/?a=" +
                        user.nombre +
                        "&b=" +
                        user.apellido +
                        "&c=" +
                        user.legajo
                      }
                      className="w-full  p-1 flex"
                    >
                      <img
                        className="w-10 p-[0.6rem]"
                        src="/rh-nuevo/nuevo-icon (9).svg"
                        alt="asdf"
                      />
                      <div className="pl-6">Dashboard</div>
                    </a>
                    {/* <a
                      href={
                        "https://mmxapp2.mercomaxsa.com.ar/rh-nuevo/solicitudes/?a=" +
                        user.nombre +
                        "&b=" +
                        user.apellido +
                        "&c=" +
                        user.legajo
                      }
                      className="w-full  p-1 flex"
                    >
                      <img
                        className="w-10"
                        src="/rh-nuevo/nuevo-icon (6).svg"
                        alt="asdf"
                      />
                      <div className="pl-6">Solicitudes</div>
                    </a> */}
                    <a
                      href="https://mmxapp2.mercomaxsa.com.ar/rh/themes/internos.php"
                      className="w-full  p-1 flex"
                    >
                      <img
                        className="w-10"
                        src="/rh-nuevo/nuevo-icon (7).svg"
                        alt="asdf"
                      />
                      <div className="pl-6">Internos</div>
                    </a>
                    <a
                      href="https://mmxapp2.mercomaxsa.com.ar/rh/themes/referidos.php"
                      className="w-full  p-1 flex"
                    >
                      <img
                        className="w-10"
                        src="/rh-nuevo/nuevo-icon (8).svg"
                        alt="asdf"
                      />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
