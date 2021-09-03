import { apiDataSource } from '../../constants/Types';
import http from '../helper/AxiosInstance';

const seccion = apiDataSource;

const getAll = (query) => {
    return http.get(`/${seccion}?${query}`);
};

const create = (data) => {
    return http.post(`${seccion},${data}`);
};

const getValuesById = (id, query) => {
    return http.get(`${seccion}/${id}/values?${query}`);
};

const getById = (id, query) => {
    return http.get(`${seccion}/${id}?${query}`);
};

const update = (id, data) => {
    return http.put(`${seccion}/${id}`, data);
};

const remove = (id) => {
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