import React, { useEffect } from "react";

const Clima = ({ clima }) => {
  const imagenClima = (id) => {
    if (id < 300) {
      return "/tormenta.png";
    } else if (id < 500) {
      return "/llovizna.png";
    } else if (id < 520) {
      return "/lluvia.png";
    } else if (id < 600) {
      return "/lluvia nublado.png";
    } else if (id < 700) {
      return "/nieve.png";
    } else if (id < 800) {
      return "/neblina.png";
    } else if (id == 800) {
      return "/despejado.png";
    } else if (id == 801) {
      return "/nublado.png";
    } else if (id < 900) {
      return "/muy nublado.png";
    }
  };

  return (
    <div>
      {!clima[0] ? (
        <div>Cargando...</div>
      ) : (
        <div className="flex justify-between h-[10rem] py-5 px-10 border-2 border-black rounded-3xl bg-[#FFF9BA]">
          <div className="flex flex-col justify-center items-center">
            <img  className="w-[5rem] bg-slate-600 rounded-3xl" src={imagenClima(clima[0].climaID)}></img>
            <div className="text-2xl">Beccar, ARG</div>
          </div>
          <div className="border-l w-[7rem] border-black pl-2">
            <div className="">
              <div className="text-sm">Temperatura:</div>
              <div className="w-fit p-1 border border-black rounded-3xl bg-white font-bold text-xl">{clima[0].temperatura}C°</div>
            </div>
            <div className="">
              <div className="text-sm">Humedad:</div>
              <div className="w-fit p-1 border border-black rounded-3xl bg-white font-bold text-xl">{clima[0].humedad}%</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clima;
