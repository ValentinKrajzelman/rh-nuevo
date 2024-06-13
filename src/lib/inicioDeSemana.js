const inicioDeSemana = (feriados, dia) => {
  if (
    feriados.find((feriado) => {
      return (
        Math.round(
          (Date.parse(dia) - Date.parse(feriado)) / (1000 * 60 * 60 * 24)
        ) == 1
      );
    }) ||
    dia.toString().includes("Mon")
  ) {
    return true;
  } else {
    return false;
  }
};

export default inicioDeSemana;
