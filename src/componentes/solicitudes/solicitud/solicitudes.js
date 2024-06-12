import React, { useEffect, useRef, useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import VacacionesSemana from "./vacacionesSemana";
import Tabla from "./tablaSolicitudes";
import Modal from "./modalSolicitudes";
import { fetchSolicitudesUser } from "../../../api/solicitudesSolicitudes";
import CalendarioSemanal from "../../ejemplos/calendarioSemanal";
import esResponsable from "../../../lib/esResponsable";
import { useLocation } from "react-router-dom";
import responsables from "../../../const/responsablesLegajos";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const Solicitudes = () => {
  const [tipo, setTipo] = useState("vacaciones");

  const [visibilidad, setVisibilidad] = useState(false);
  const [solicitudModal, setSolicitudModal] = useState({});
  const [responsable, setResponsable] = useState(false);
  const [user, setUser] = useState(false);
  const [solicitudesActuales, setSolicitudes] = useState(null);

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
      responsables.find((responsable) => {
        return responsable.legajo == legajo;
      }) && true
    );
  }, [location]);

  const currentSolicitudes = async () => {
    await fetchSolicitudesUser(882).then((res) => {
      setSolicitudes(res.data);
    });
  };

  useEffect(() => {
    currentSolicitudes();
  }, []);

  return (
    <div className="flex flex-col items-center w-full mt-5">
      <Modal
        visibilidad={visibilidad}
        solicitudModal={solicitudModal}
        setVisibilidad={setVisibilidad}
      />
      <div className="w-[60rem]">
        <div className="flex items-end">
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
          {responsable && <button className=" ml-5 py-1.5 px-3 rounded-md text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2">
            <a
              href={
                "https://mmxapp2.mercomaxsa.com.ar/rh-nuevo/solicitudes/confirmacion/?a=" +
                user.nombre +
                "&b=" +
                user.apellido +
                "&c=" +
                user.legajo
              }
              className="flex items-center"
            >
              Confirmacion <ArrowUpRightIcon className="w-3 ml-2" />
            </a>
          </button>}
        </div>
        <VacacionesSemana />
        <Tabla
          solicitudes={solicitudesActuales}
          setVisibilidad={setVisibilidad}
          setSolicitudModal={setSolicitudModal}
        />
      </div>
    </div>
  );
};

export default Solicitudes;
