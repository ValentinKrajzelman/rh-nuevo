import meses from "../const/meses";

const procesarSolicitudes = (solicitudes, personal) => {

  let solicitudesProcesadas = solicitudes.map((solicitud) => {
    const currentDateInicio = new Date(solicitud.fecha_inicio);
    let dateString = currentDateInicio.toDateString();
    let mesInicio = meses.findIndex((mesAct, index) => {
      return dateString.includes(mesAct.mes) && dateString.includes(mesAct.ano);
    });
    const currentDateFin = new Date(solicitud.fecha_fin);
    dateString = currentDateFin.toDateString();
    let mesFin = meses.findIndex((mesAct, index) => {
      return dateString.includes(mesAct.mes) && dateString.includes(mesAct.ano);
    });
    let empleado = personal.find((aux)=>{return aux.id == solicitud.id_usuario})
    // console.log("asdf", empleado)
    return {
      ...solicitud,
      ...empleado,
      mesInicio,
      id:solicitud.id,
      diaInicio: currentDateInicio.getDate(),
      mesFin,
      diaFin: currentDateFin.getDate(),
    };
  });
    return solicitudesProcesadas;
};

export default procesarSolicitudes;
