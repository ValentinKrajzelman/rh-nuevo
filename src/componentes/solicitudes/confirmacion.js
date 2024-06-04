import { fetchSolicitudesUser } from "../../api/solicitudesSolicitudes";
import React, { useEffect, useState } from "react";
import CalendarioConfirmacion from "./calendarioConfirmacion";
import Modal from "./modal";
import Tabla from "./tablaSolicitudes";

const Confirmacion = () => {
  const [tipo, setTipo] = useState("vacaciones");
  const [sector, setSector] = useState(false);
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
      <Modal
        visibilidad={visibilidad}
        solicitudModal={solicitudModal}
        setVisibilidad={setVisibilidad}
      />
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
        <CalendarioConfirmacion />
        <Tabla
          solicitudes={solicitudesActuales}
          setVisibilidad={setVisibilidad}
          setSolicitudModal={setSolicitudModal}
        />
      </div>
    </div>
  );
};

export default Confirmacion;
