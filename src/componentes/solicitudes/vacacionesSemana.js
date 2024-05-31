import React, { useEffect, useRef, useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";

import inicioDeSemana from "../../lib/inicioDeSemana";
import feriados from "../../const/feriados";

// Assuming currentDate represents 10/7/2024
const currentDate = new Date(); // Months are 0-indexed, so 9 represents October

// Get the current year
const currentYear = currentDate.getFullYear();

// Create a new Date object for the same date next year
const nextYearDate = new Date(
  currentYear,
  currentDate.getMonth() + 6,
  currentDate.getDate()
);


const VacacionesSemana = () => {
  const [estado, setEstado] = useState("Seleccione la semana para solicitar.");
  const [value, onChange] = useState(null);
  
  const iniSem = feriados;
  
  
  useEffect(() => {
    if (!value) {
    } else if (
      Math.round(((value[1] - value[0]) / (1000 * 60 * 60 * 24)))% 7 == 0 &&
      inicioDeSemana(iniSem,value[0])
    ) {
      setEstado(
        <div className="text-green-600 mb-3">
          <div>*Todo ok. Selecciono:</div>
          <div> ({Math.round((value[1] - value[0]) / (1000 * 60 * 60 * 24))}) Dia(s)</div>
        </div>
      );
    } else if (
      !(Math.round(((value[1] - value[0]) / (1000 * 60 * 60 * 24)))% 7 == 0) ||
      !inicioDeSemana(iniSem,value[0])
    ) {
      setEstado(
        <div className="text-red-600 mb-3 w-full">
          <div>
            *Error. Fechas elegidas no validas. 
            -No se puede iniciar las vacaciones a mitad de semana. 
            -Solo semanas completas de corrido (7, 14, 21, etc).
          </div>
        </div>
      );
    }
  }, [value]);

  return (
    <div className="border-2 rounded-xl p-5 m-5">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="mb-10">
            <div className="text-2xl font-bold">Dias disponibles</div>
            <div className="text-3xl text-green-500">28 Dias</div>
            <div className="text-sm text-gray-600">(4) semanas</div>
          </div>
          <div className="mb-5">
            <div className="font-bold">Dias usados</div>
            <div className="text-lg text-gray-600">14 dias</div>
            <div className="text-sm text-gray-600">(2) semanas</div>
          </div>
          <div className="mb-5">
            <div className="font-bold">Fecha de ingreso</div>
            <div className="text-lg text-gray-600">24/7/2020</div>
            <div className="text-lg text-gray-600">(>29 años)</div>
          </div>
          <div className="mb-5">
            <div className="font-bold">Vacaciones por ley</div>
            <div className="text-lg text-gray-600">
              20 <div className="text-sm text-gray-600">(dias/año)</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {" "}
          <div className="text-sm w-[20rem]">{estado}</div>
          <div>
            <DateRangePicker
              onChange={onChange}
              value={value}
              minDate={new Date()}
              maxDate={nextYearDate}
              showWeekNumbers={true}
              isOpen={true}
              shouldCloseCalendar={() => {
                return false;
              }}
            />
          </div>
        </div>
        <div className="p-8 border-l-2 flex flex-col items-center justify-between">
          <div>
            <div className="mb-5">
              <div className="font-bold">Responsable (sector)</div>
              <div className="text-xl">Daniela</div>
            </div>
            <div className="mb-5">
              <div className="font-bold">Responsable (RRHH)</div>
              <div className="text-xl">Karina</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-5">
              <button className="bg-green-500 text-xl rounded-xl text-white font-bold p-5">
                Enviar
              </button>
              <div className="text-xs">*a revision por rrhh</div>
            </div>
            <button className="underline text-gray-600">cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacacionesSemana;
