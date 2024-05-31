import axios from 'axios';

const url = 'https://mmxapp2.mercomaxsa.com.ar/node/rhSolicitudesSolicitudes/';

export const fetchSolicitudesCurrentSector = (id) => axios.get(url + "currentSector/" + id);
export const fetchSolicitudesUser = (id) => axios.get(url + "currentUser/" + id);
export const fetchSolicitudesUserPeriodoCorriente = (id) => axios.get(url + "currentUserPerCorr/" + id);
export const fetchSolicitudesDelete = (id) => axios.delete(url + "delete/" + id);
export const fetchSolicitudesUpdate = (solicitud) => axios.post(url+'update',solicitud);
export const fetchSolicitudesPost = (solicitud) => axios.post(url+'post',solicitud);