import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Modal from "./modal";
import Clima from "./clima";
import { fetchCurrentClima } from "../api/clima";
import { fetchCurrentNoticias } from "../api/noticias";
import { fetchCurrentNovedades } from "../api/novedades";
import Cultura from "./noticias";

// import Modal from "../components/modal";

const Inicio = () => {
  const [noticias, setNoticias] = useState([]);
  const [clima, setClima] = useState([]);
  const [novedades, setNovedades] = useState([]);
  const [cultura, setCultura] = useState([]);
  const [user, setUser] = useState({});

  let location = useLocation();

  useEffect(() => {
    let urlParams = new URLSearchParams(window.location.search);
    let nombre = urlParams.get("a");
    let apellido = urlParams.get("b");
    let legajo = urlParams.get("c");
    setUser({
      nombre: nombre,
      apellido: apellido,
      legajo: legajo
    });
  }, [location]);

  const currentClima = async () => {
    await fetchCurrentClima().then((res) => {
      setClima(res.data);
    });
  };
  const currentNoticias = async () => {
    await fetchCurrentNoticias().then((res) => {
      setNoticias(res.data);
    });
  };
  const currentNovedades = async () => {
    await fetchCurrentNovedades().then((res) => {
      setNovedades(res.data);
    });
  };

  const popularCultura = async () => {
    fetch("https://www.cultura.gob.ar/api/v2.0/convocatorias/?limit=3",{method:'GET',credentials: 'include', headers:{'Content-Type':'application/json'}})
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        setCultura(res.results);
      });
  };

  useEffect(() => {
    currentNoticias();
    currentClima();
    currentNovedades();
    popularCultura();
  }, []);

  console.log(cultura);

  return (
    <div className="flex flex-col p-4 px-8 w-full">
      <div className="flex justify-center text-3xl bold mb-14"><img className="w-[20rem]" src="/rh-nuevo/banner-mercomax.png"></img></div>
      {/* primera fila */}
      <div className="flex w-full h-[15rem] justify-center items-center">
        <div className="w-[40%] flex flex-col border-2 m-6 border-black rounded-3xl h-full">
          {/* <div className="flex text-2xl justify-center items-center align-middle grow"> */}
          <div className="text-2xl p-3 bold h-12">Clima</div>
          <div className="p-3">
            <Clima clima={clima} />
          </div>
          {/* </div> */}
        </div>
        <div className="w-[40%] flex flex-col border-2 m-6 ml-8 border-black rounded-3xl h-full">
          <div className="text-2xl p-3 bold h-12">Noticias</div>
          {/* <div className="w-full grow m-2 ">a</div> */}
          <div className="h-[10rem] p-3">
            Proximamente
            {/* <Cultura CulturaArray={cultura}/> */}
          </div>
        </div>
      </div>
      {/* segunda fila */}
      <div className="flex w-full h-[15rem] justify-center items-center mt-14">
        <div className="w-[40%] flex flex-col m-6 border-2  border-black rounded-3xl h-full">
          <div className="text-2xl p-3 bold h-14">Anuncios</div>
          <div className="flex flex-col pb-2 w-full items-center grow">
            <div className="flex noScrollbar flex-col items-center border-2 overflow-y-scroll border-black bg-[#FFF9BA] h-[0.1rem]  w-[95%] grow rounded-3xl">
              {novedades.map((anuncio) => {
                return (
                  <div
                    key={anuncio.id.toString()}
                    className="w-[95%] bg-[#FFFFFF] border-2  border-black m-2 rounded-3xl p-2"
                  >
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <div className="text-lg">{anuncio.titulo}</div>
                        <div className="text-xs align-middle pt-2 w-[4rem]">
                          {anuncio.fecha.toString().slice(0, 10)}
                        </div>
                      </div>
                      <div className="text-sm">{anuncio.contenido}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[40%] flex flex-col  m-6 border-black rounded-3xl h-full">
          {/* <div className="text-2xl p-3 bold h-14">Video introductorio</div> */}
          <video
            className="rounded-3xl"
            src="https://mmxapp2.mercomaxsa.com.ar/files/Mercomax-Reglamento.webm"
            controls
            // style={{ width: "390px", height: "219px" }}
            style={{ width: "443px", height: "250px" }}
          ></video>
        </div>
      </div>
      <div>
        {/* <div className="flex justify-center text-3xl bold my-10">
            Notificaciones
          </div> */}
        <div className="flex justify-center space-x-3">
          <Modal noticias={noticias} />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
