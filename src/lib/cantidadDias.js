const cantidadDias = (arr) => {
  let aux = arr.map((item) => {
    return (
      (Date.parse(item.fecha_fin) - Date.parse(item.fecha_inicio)) /
      (1000 * 60 * 60 * 24)
    );
  });
  return Math.round(aux.reduce((accumulator, currentValue) => accumulator + currentValue));
};
export default cantidadDias;

<div className="text-sm text-gray-600">(dias/año)</div>