import React from "react";

const Navbar = () => {
  return (
    <div className="fixed h-full">
      <div className="relative bg-[#B7B9BD] h-full min-w-[15rem] w-[20%]">
        <div className="flex flex-col w-full border-b-2 border-black p-[1rem]">
          Mercomax - R.H
        </div>
        {/* <div className="flex flex-col items-center w-full p-[1rem] border-b-2 border-black">
                <div className="w-28 h-28">foto</div>
                <div>nombre</div>
              </div> */}
        <div className="flex flex-col w-full border-b-2 border-black">
          <a
            href="https://mmxapp2.mercomaxsa.com.ar/rh_next/"
            className="w-full  p-1 flex"
          >
            < img className="w-10"
              src=" /nuevo-icon (2).svg"
              alt="asdf"
               
            />
            <div className="pl-6">Inicio </div>
          </a>
          <a
            href="https://mmxapp2.mercomaxsa.com.ar/rh/themes/mis_datos.php"
            className="w-full  p-1 flex"
          >
            < img className="w-10"
              src=" /nuevo-icon (3).svg"
              alt="asdf"
               
            />
            <div className="pl-6">Mis datos</div>
          </a>
          <a
            href="https://mmxapp2.mercomaxsa.com.ar/rh/themes/consultas.php"
            className="w-full  p-1 flex"
          >
            < img className="w-10"
              src=" /nuevo-icon (4).svg"
              alt="asdf"
               
            />
            <div className="pl-6">Mensajes</div>
          </a>
          <a
            href="https://mmxapp2.mercomaxsa.com.ar/rh/themes/mis_recibos_sueldos.php"
            className="w-full  p-1 flex"
          >
            < img className="w-10"
              src=" /nuevo-icon (5).svg"
              alt="asdf"
               
            />
            <div className="pl-6">Recibos de sueldo</div>
          </a>
          <a
            href="https://mmxapp2.mercomaxsa.com.ar/rh/biblio/Biblioteca.htm"
            className="w-full  p-1 flex"
          >
            < img className="w-10 p-[0.6rem]"
              src=" /nuevo-icon (10).svg"
              alt="asdf"
            />
            <div className="pl-6">Biblioteca BD</div>
          </a>
          <a
            href="https://mmxapp2.mercomaxsa.com.ar/rh/themes/carga_novedades.php"
            className="w-full  p-1 flex"
          >
            < img className="w-10 p-[0.6rem]"
              src=" /nuevo-icon (9).svg"
              alt="asdf"
            />
            <div className="pl-6">Dashboard</div>
          </a>
          <a
            href="https://mmxapp2.mercomaxsa.com.ar/rh/themes/carga_inasistencias.php"
            className="w-full  p-1 flex"
          >
            < img className="w-10"
              src=" /nuevo-icon (6).svg"
              alt="asdf"
               
            />
            <div className="pl-6">Inasistencias</div>
          </a>
          <a
            href="https://mmxapp2.mercomaxsa.com.ar/rh/themes/internos.php"
            className="w-full  p-1 flex"
          >
            < img className="w-10"
              src=" /nuevo-icon (7).svg"
              alt="asdf"
               
            />
            <div className="pl-6">Internos</div>
          </a>
          <a
            href="https://mmxapp2.mercomaxsa.com.ar/rh/themes/referidos.php"
            className="w-full  p-1 flex"
          >
            < img className="w-10"
              src=" /nuevo-icon (8).svg"
              alt="asdf"
               
            />
            <div className="pl-6">Referidos</div>
          </a>
        </div>

        <a
          href="https://mmxapp2.mercomaxsa.com.ar/rh/include/cerrar_sesion.php"
          className="w-full  p-1 flex"
        >
          < img className="w-10"
            src=" /nuevo-icon (1).svg"
            alt="asdf"
            width="40"
            height="40"
          />
          <div className="pl-6">Cerrar sesion</div>
        </a>

        {/* <div className="absolute top-4 right-4">abrir</div> */}
      </div>
    </div>
  );
};

export default Navbar;
