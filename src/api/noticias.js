import axios from 'axios';

const url = 'https://mmxapp2.mercomaxsa.com.ar/node/rhNoticias/';

export const fetchCurrentNoticias = () => axios.get(url + "current");
export const fetchOneNoticias = () => axios.post(url+'one');
// export const fetchManyDetalles = (id) => axios.get(url+'many/' + id);
// export const fetchPostDetalles = (detalle) => axios.post(url+'one',detalle);
// export const fetchUpdateDetalles = (detalle) => axios.post(url+'updateOne',detalle);
export const fetchDeleteNoticias = ({id}) => axios.delete(url+'one/'+id);
