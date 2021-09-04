import { apiConnections } from '../../constants/Types';
import http from '../helper/AxiosInstance';

const seccion = apiConnections;

const getAll = (query) => {
  return http.get(`/${seccion}?${query}`);
};

const getById = (id,query) => {
  return http.get(`${seccion}/${id}?${query}`);
};

const update = (id, data) => {
  return http.put(`${seccion}/${id}`,data);
};

const remove = (id) => {
  return http.delete(`${seccion}/${id}`);
};

const ConnectionsService = {
  getAll,
  getById,
  update,
  remove,
};

export default ConnectionsService;