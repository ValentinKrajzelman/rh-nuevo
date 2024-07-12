import axios from 'axios';

const url = 'https://mmxapp2.mercomaxsa.com.ar/node/rhSolicitudesUser/';

export const fetchOneUser = (id) => axios.get(url + "one/" + id);
export const fetchManyUsers = (ids) => axios.get(url+'many',ids);
export const fetchUsersSector = (id) => axios.get(url+'sector/' + id);
// export const fetchManyDetalles = (id) => axios.get(url+'many/' + id);
// export const fetchPostNovedades = (novedades) => axios.post(url+'one',novedades);
export const fetchUpdateUser = (user) => axios.post(url+'update',user);
// export const fetchDeleteNovedades = ({id}) => axios.delete(url+'one/'+id);
