import React, { useEffect, useRef, useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";

import inicioDeSemana from "../../../lib/inicioDeSemana";
import feriados from "../../../const/feriados";
import { useLocation } from "react-router-dom";
import { fetchOneUser } from "../../../api/solicitudesUser";
import { fetchSolicitudesUserPeriodoCorriente } from "../../../api/solicitudesSolicitudes";
import cantidadDias from "../../../lib/cantidadDias";
import vacacionesLey from "../../../lib/vacacionesLey";
import { fetchOneSector } from "../../../api/solicitudesSector";
import esResponsable from "../../../lib/esResponsable";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const nextYearDate = new Date(
  currentYear,
  currentDate.getMonth() + 6,
  currentDate.getDate()
);

const VacacionesSemana = () => {
  const [estado, setEstado] = useState("Seleccione la semana para solicitar.");
  const [value, onChange] = useState(null);
  const [user, setUser] = useState();
  const [userSolicitudes, setUserSolicitudes] = useState();
  const [responsable, setResponsable] = useState(false);
  const [solicitudesCor, setSolicitudesCor] = useState(false);
  const [sectorUser, setSectorUser] = useState();

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
    if (esResponsable(legajo)) {
      setResponsable(true);
    }
  }, [location]);

  const datosUser = async () => {
    user &&
      (await fetchOneUser(Number.parseInt(user.legajo)).then((res) => {
        setUserSolicitudes(res.data[0]);
      }));
  };
  const solPerCor = async () => {
    userSolicitudes &&
      (await fetchSolicitudesUserPeriodoCorriente(
        Number.parseInt(user.legajo)
      ).then((res) => {
        setSolicitudesCor(res.data);
      }));
  };
  const sector = async () => {
    userSolicitudes &&
      (await fetchOneSector(userSolicitudes.id_sector).then((res) => {
        console.log(res.data);
        setSectorUser(res.data[0]);
      }));
  };

  useEffect(() => {
    datosUser();
  }, [user]);

  useEffect(() => {
    solPerCor();
  }, [userSolicitudes]);

  useEffect(() => {
    sector();
  }, [userSolicitudes]);

  useEffect(() => {
    if (!value) {
    } else if (
      Math.round((value[1] - value[0]) / (1000 * 60 * 60 * 24)) % 7 == 0 &&
      inicioDeSemana(feriados, value[0])
    ) {
      setEstado(
        <div className="text-green-600 mb-3">
          <div>*Todo ok. Selecciono:</div>
          <div>
            {" "}
            ({Math.round((value[1] - value[0]) / (1000 * 60 * 60 * 24))}) Dia(s)
          </div>
        </div>
      );
    } else if (
      !(Math.round((value[1] - value[0]) / (1000 * 60 * 60 * 24)) % 7 == 0) ||
      !inicioDeSemana(feriados, value[0])
    ) {
      setEstado(
        <div className="text-red-600 mb-3 w-full">
          <div>
            *Error. Fechas elegidas no validas. -No se puede iniciar las
            vacaciones a mitad de semana. -Solo semanas completas de corrido (7,
            14, 21, etc).
          </div>
        </div>
      );
    }
  }, [value]);

  return (
    <div className="border-2 rounded-xl p-5 m-5">
      <div className="flex justify-between">
        {userSolicitudes && (
          <div className="flex flex-col">
            <div className="mb-10">
              <div className="text-2xl font-bold">Dias disponibles</div>
              <div className="text-3xl text-green-500">
                {" "}
                {userSolicitudes.dias} Dias
              </div>
              <div className="text-sm text-gray-600">
                ({userSolicitudes.dias / 5}) semanas
              </div>
            </div>
            <div className="mb-5">
              <div className="font-bold">Dias usados</div>
              <div className="text-lg text-gray-600">
                {solicitudesCor && cantidadDias(solicitudesCor)} dias
              </div>
              <div className="text-sm text-gray-600">
                ({solicitudesCor && cantidadDias(solicitudesCor) / 5}) semanas
              </div>
            </div>
            <div className="mb-5">
              <div className="font-bold">Fecha de ingreso</div>
              <div className="text-lg text-gray-600">
                {userSolicitudes.fecha_ingreso.substring(0, 10)}
              </div>
              <div className="text-lg text-gray-600">
                (
                {(
                  ">" +
                  ((Date.now() - Date.parse(userSolicitudes.fecha_ingreso)) /
                    (1000 * 60 * 60 * 24 * 365) +
                    1)
                ).substring(0, 2)}{" "}
                años)
              </div>
            </div>
            <div className="mb-5">
              <div className="font-bold">Vacaciones por ley</div>
              {vacacionesLey(
                (Date.now() - Date.parse(userSolicitudes.fecha_ingreso)) /
                  (1000 * 60 * 60 * 24)
              )}{" "}
            </div>
          </div>
        )}
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
              <div className="text-xl">{sectorUser && sectorUser.delegado}</div>
            </div>
            <div className="mb-5">
              <div className="font-bold">Responsable (RRHH)</div>
              <div className="text-xl">
                {sectorUser && sectorUser.delegado_rh}
              </div>
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
