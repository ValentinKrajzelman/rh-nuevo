import { useEffect, useState } from "react";
import meses from "../../../const/meses";
import { fetchAllSectores } from "../../../api/solicitudesSector";
import { fetchSolicitudesCurrentSector } from "../../../api/solicitudesSolicitudes";
import procesarSolicitudes from "../../../lib/procesarSolicitudes";
import { fetchUsersSector } from "../../../api/solicitudesUser";
import Tabla from "./tablaConfirmacion";
import Modal from "./modalConfirmacion";

export default function CalendarioConfirmacion() {
  const currentDate = new Date();
  const dateString = currentDate.toDateString();

  const [mes, setMes] = useState(
    meses.findIndex((mesAct, index) => {
      return dateString.includes(mesAct.mes) && dateString.includes(mesAct.ano);
    })
  );
  const [sectores, setSectores] = useState();
  const [sectorActual, setSectorActual] = useState();
  const [solicitudes, setSolicitudes] = useState();
  const [personal, setPersonal] = useState();
  const [visibilidad, setVisibilidad] = useState(false);
  const [solicitudModal, setSolicitudModal] = useState();

  const popularSectores = async () => {
    await fetchAllSectores().then((res) => {
      setSectores(res.data);
    });
  };

  const popularPersonal = async () => {
    sectorActual &&
      (await fetchUsersSector(sectorActual.id).then((res) => {
        setPersonal(res.data);
      }));
  };

  const popularSolicitudes = async () => {
    sectorActual &&
      (await fetchSolicitudesCurrentSector(sectorActual.id).then((res) => {
        let solicitudesProcesadas = procesarSolicitudes(res.data, personal);
        console.log(solicitudesProcesadas);
        setSolicitudes(solicitudesProcesadas);
      }));
  };

  useEffect(() => {
    popularSectores();
  }, []);

  useEffect(() => {
    setSectorActual(sectores && sectores[0]);
  }, [sectores]);

  useEffect(() => {
    popularPersonal();
  }, [sectorActual]);

  useEffect(() => {
    popularSolicitudes();
  }, [personal]);

  return (
    <div className="flex pb-14 flex-col">
      <Modal
        visibilidad={visibilidad}
        setVisibilidad={setVisibilidad}
        solicitudModal={solicitudModal}
      />
      {/* barra de arriba de las semanas */}
      <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4">
        <h1 className="text-base flex font-semibold leading-6 text-gray-900">
          <select
            defaultValue={mes}
            onChange={(e) => {
              setMes(e.target.value);
            }}
            id="location"
            name="location"
            className="mt-2 mr-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            {meses.map((mes, index) => {
              return (
                <option value={index}>{mes.nombre + " " + mes.ano}</option>
              );
            })}
          </select>

          <select
            defaultValue={0}
            onChange={(e) => {
              setSectorActual(sectores[e.target.value]);
            }}
            id="location"
            name="location"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            {sectores &&
              sectores.map((sector, index) => {
                return <option value={index}>{sector.nombre}</option>;
              })}
          </select>
        </h1>
      </header>

      <div className="isolate flex flex-auto flex-col overflow-auto bg-white">
        <div
          style={{ width: "165%" }}
          className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full"
        >
          {/* dias */}
          <div className="sticky pl-[7rem] top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8">
            <div
              className="-mr-px hidden grid-cols-[30] divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid"
              style={{
                gridTemplateColumns:
                  "repeat(" + meses[mes].dias + ", minmax(1.7rem, 1.7rem))",
              }}
            >
              {[...Array(meses[mes].dias)].map((num, index) => {
                return (
                  <div>
                    <div className="flex items-center justify-center py-3">
                      <span className="items-center justify-center font-semibold text-gray-900">
                        {"" + (index + 1)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-auto">
            <div className="sticky left-0 z-10 w-[7rem] flex-none bg-white ring-1 ring-gray-100" />
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* nombres rows */}
              <div
                className={
                  "col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                }
                style={{
                  gridTemplateRows:
                    "repeat(" +
                    (solicitudes &&
                      solicitudes.filter((solicitud) => {
                        return (
                          solicitud.mesInicio == mes || solicitud.mesFin == mes
                        );
                      }).length + 1) +
                    ", minmax(2.5rem,2.5rem))",
                }}
              >
                {solicitudes &&
                  solicitudes
                    .filter((solicitud) => {
                      return (
                        solicitud.mesInicio == mes || solicitud.mesFin == mes
                      );
                    })
                    .map((solicitud, index) => {
                      return (
                        <div
                          className={"row-start-[" + index + 1 + "] h-[2.5rem]"}
                        >
                          <div className="sticky left-0 z-20 -ml-[8rem] w-[7rem] pr-2 text-xs leading-5 text-gray-400">
                            {solicitud.nombre}
                          </div>
                        </div>
                      );
                    })}
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-[0.9rem] w-14 pr-2 text-right text-xs leading-5 text-gray-400"></div>
                </div>
              </div>

              {/* Vertical lines */}
              <div
                className="grid col-start-1 col-end-2 row-start-1 grid-rows-1 divide-x divide-gray-100"
                style={{
                  gridTemplateColumns: "repeat(30, minmax(1.7rem,1.7rem))",
                }}
              >
                {/* esto es lo que renderiza los separadores grises verticales entre los dias, el array tiene que ser los dias del mes + 1 */}
                {[...Array(meses[mes].dias)].map((num, index) => {
                  return (
                    <div className={"col-start-" + index + " row-span-full"} />
                  );
                })}
              </div>

              {/* casillas */}
              <ol
                className="col-start-1 col-end-2 row-start-1 grid"
                style={{
                  gridTemplateRows:
                    "repeat(" +
                    (solicitudes &&
                      solicitudes.filter((solicitud) => {
                        return (
                          solicitud.mesInicio == mes || solicitud.mesFin == mes
                        );
                      }).length + 1) +
                    ", minmax(2.5rem,2.5rem))",
                  gridTemplateColumns: "repeat(30, minmax(1.7rem,1.7rem))",
                }}
              >
                {solicitudes &&
                  solicitudes
                    .filter((solicitud) => {
                      console.log(solicitud);
                      return (
                        solicitud.mesInicio == mes || solicitud.mesFin == mes
                      );
                    })
                    .map((solicitud, index) => {
                      return (
                        <li
                          className="relative mt-px flex sm:col-start-3 p-1"
                          style={{
                            gridRow: index + 1 + " / span 1",
                            gridColumn:
                              (solicitud.mesInicio == mes &&
                                solicitud.mesFin == mes &&
                                solicitud.diaInicio +
                                  " / " +
                                  solicitud.diaFin) ||
                              (solicitud.mesInicio == mes &&
                                !(solicitud.mesFin == mes) &&
                                solicitud.diaInicio +
                                  " / " +
                                  meses[mes].dias +
                                  1) ||
                              (!(solicitud.mesInicio == mes) &&
                                solicitud.mesFin == mes &&
                                " 1 / " + solicitud.diaFin),
                          }}
                        >
                          <div className="bg-blue-400 text-xs w-full pl-5">
                            {solicitud.fecha_inicio.slice(0, 10) +
                              " - " +
                              solicitud.fecha_fin.slice(0, 10)}
                          </div>
                        </li>
                      );
                    })}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Tabla
        solicitudes={solicitudes}
        setVisibilidad={setVisibilidad}
        setSolicitudModal={setSolicitudModal}
      />
    </div>
  );
}
