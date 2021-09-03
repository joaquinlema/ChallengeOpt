import { apiLogin } from '../../constants/Types';
import http from '../helper/AxiosInstance';

const seccion = apiLogin;

const login = (data: any) => {
    return http.post(`/${seccion}`,data)
}

const LoginService = {
    login,
};

export default LoginService;