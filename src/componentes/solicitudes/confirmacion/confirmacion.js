import { fetchSolicitudesUser } from "../../../api/solicitudesSolicitudes";
import React, { useEffect, useState } from "react";
import CalendarioConfirmacion from "./calendarioConfirmacion";
import ModalConfirmacion from "./modalConfirmacion";
import responsables from "../../../const/responsablesLegajos";
import { useLocation } from "react-router-dom";
// import TablaConfirmacion from "./tablaConfirmacion";

const Confirmacion = () => {
  // const [tipo, setTipo] = useState("vacaciones");
  // const [sector, setSector] = useState(false);
  const [visibilidad, setVisibilidad] = useState(false);
  const [solicitudModal, setSolicitudModal] = useState({});
  const [responsable, setResponsable] = useState(false);
  const [user, setUser] = useState(false);
  // const [solicitudesActuales, setSolicitudes] = useState(null);
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
    setResponsable(
      responsables.filter((responsable) => {
        return responsable.legajo == legajo;
      })[0]
    );
  }, [location]);
  return (
    <div className="flex flex-col items-center w-full mt-5">
      {/* <ModalConfirmacion
        visibilidad={visibilidad}
        solicitudModal={solicitudModal}
        setVisibilidad={setVisibilidad}
        responsable={responsable}
      /> */}
      <div className="w-[60rem]">
        <div className="w-[10rem]">
          <label
            htmlFor="location"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Tipo de solicitud
          </label>
          <select
            id="location"
            name="location"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue="Vacaciones"
          >
            <option>Vacaciones</option>
          </select>
        </div>
        <CalendarioConfirmacion responsable={responsable} />
      </div>
    </div>
  );
};

export default Confirmacion;
