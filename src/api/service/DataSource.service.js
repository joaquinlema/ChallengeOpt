import { apiDataSource } from '../../constants/Types';
import http from '../helper/AxiosInstance';

const seccion = apiDataSource;

const getAll = () => {
    return http.get(`/${seccion}`);
};

const create = (data: any) => {
    return http.post(`${seccion},${data}`);
};

const getValuesById = (id: Number, query:String) => {
    return http.get(`${seccion}/${id}/values?${query}`);
};

const getById = (id: Number, query:String) => {
    return http.get(`${seccion}/${id}?${query}`);
};

const update = (id: Number, data: any) => {
    return http.put(`${seccion}/${id}`, data);
};

const remove = (id: Number) => {
    return http.delete(`${seccion}/${id}`);
};

const DataSourceService = {
    create,
    getAll,
    getById,
    update,
    remove,
    getValuesById
};

export default DataSourceService;