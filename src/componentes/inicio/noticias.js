import React, { useEffect } from "react";

const Cultura = ({ CulturaArray }) => {
  return (
    <div className="overflow-y-scroll noScrollbar border  rounded-3xl border-black bg-[#9FE96E] h-[10.5rem] w-full p-3">
      {!CulturaArray ? (
        <div>Cargando...</div>
      ) : (
        CulturaArray.map((itemCultura) => {
          return (
            <div
              key={itemCultura.id}
              className="flex justify-between mb-5 border  rounded-3xl bg-[#ffffff] border-black md:h-[10rem] p-[1rem] overflow-hidden"
            >
              <div className="flex flex-col justify-between w-[12rem]">
                <div className="text-md mb-2 font-bold">
                  <div>{itemCultura.titulo.slice(0, 100)}</div>
                </div>
                <div className="text-sm">
                  <div>{itemCultura.bajada.slice(0, 20)}...</div>
                </div>
              </div>
              <div className="flex justify-between items-center flex-col w-[5rem] h-full overflow-hidden ">
                <img src={itemCultura.imagen}></img>
                <a href={itemCultura.link} target="_blank" ><img className="w-[1.5rem]" src="/rh-nuevo/nuevo-icon (11).png"></img></a>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cultura;
