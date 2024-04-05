import React, { useState } from "react";
import CalendarioDiario from "../ejemplos/calendarioDiario";
import CalendarioSemanal from "../ejemplos/calendarioSemanal";
import Tabla from "../ejemplos/tabla";

const Solicitudes = () => {
  const [tipo, setTipo] = useState("vacaciones");

  return (
    <div className="flex flex-col items-center w-full mt-5">
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
        <CalendarioSemanal />
      </div>
    </div>
  );
};

export default Solicitudes;
