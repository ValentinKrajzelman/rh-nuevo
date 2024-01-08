import axios from 'axios';

const url = 'https://mmxapp2.mercomaxsa.com.ar/node/rhNovedades/';

export const fetchCurrentNovedades = () => axios.get(url + "current");
// export const fetchOneDetalles = (id) => axios.get(url+'one',id);
// export const fetchManyDetalles = (id) => axios.get(url+'many/' + id);
export const fetchPostNovedades = (novedades) => axios.post(url+'one',novedades);
// export const fetchUpdateDetalles = (detalle) => axios.post(url+'updateOne',detalle);
// export const fetchDeleteDetalles = (id) => axios.delete(url+'one/'+id);
