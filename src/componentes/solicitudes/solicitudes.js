import React, { useEffect, useRef, useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import VacacionesSemana from "./vacacionesSemana";
import Tabla from "./tablaSolicitudes";
import Modal from "./modal";
import { fetchSolicitudesUser } from "../../api/solicitudesSolicitudes";
import CalendarioSemanal from "../ejemplos/calendarioSemanal";


const Solicitudes = () => {
  const [tipo, setTipo] = useState("vacaciones");

  const [visibilidad, setVisibilidad] = useState(false);
  const [solicitudModal, setSolicitudModal] = useState({});

  const [solicitudesActuales, setSolicitudes] = useState(null);

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
      <Modal visibilidad={visibilidad} solicitudModal={solicitudModal} setVisibilidad={setVisibilidad} />
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
