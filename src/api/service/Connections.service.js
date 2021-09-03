import { apiConnections } from '../../constants/Types';
import http from '../helper/AxiosInstance';

const seccion = apiConnections;

const getAll = (query:String) => {
  return http.get(`/${seccion}?${query}`);
};

const getById = (id: Number,query:String) => {
  return http.get(`${seccion}/${id}?${query}`);
};

const update = (id:Number, data: any) => {
  return http.put(`${seccion}/${id}`,data);
};

const remove = (id:Number) => {
  return http.delete(`${seccion}/${id}`);
};

const ConnectionsService = {
  getAll,
  getById,
  update,
  remove,
};

export default ConnectionsService;