const vacacionesLey = (dias) => {
    if (dias < 180) {
    return (
      <div className="text-lg text-gray-600">
        1 dia por cada 20 dias laborales
      </div>
    );
  } else if (dias < 1825) {
    return (
      <div className="text-lg text-gray-600">
        14
        <div className="text-sm text-gray-600">(dias/año)</div>
      </div>
    );
  } else if (dias < 3650) {
    return (
      <div className="text-lg text-gray-600">
        21
        <div className="text-sm text-gray-600">(dias/año)</div>
      </div>
    );
  } else if (dias < 7300) {
    return (
      <div className="text-lg text-gray-600">
        28
        <div className="text-sm text-gray-600">(dias/año)</div>
      </div>
    );
  } else if (dias > 7300) {
    return (
      <div className="text-lg text-gray-600">
        35
        <div className="text-sm text-gray-600">(dias/año)</div>
      </div>
    );
  }
  return "err";
};

export default vacacionesLey;
