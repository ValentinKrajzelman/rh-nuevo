import React, { useEffect } from "react";

const Cultura = ({ CulturaArray }) => {
  return (
    <div className="overflow-y-scroll noScrollbar border-2 rounded-3xl border-black bg-[#FFF9BA] h-[10.5rem] w-full p-3">
      {!CulturaArray[0] ? (
        <div>Cargando...</div>
      ) : (
        CulturaArray.map((itemCultura) => {
          return (
            <div
              key={itemCultura.id}
              className="flex justify-between mb-5 border-2 rounded-3xl bg-[#ffffff] border-black h-[10rem] p-[1rem]"
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
                <a href={itemCultura.link} target="_blank" ><img className="w-[1.5rem]" src="/nuevo-icon (11).png"></img></a>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cultura;
