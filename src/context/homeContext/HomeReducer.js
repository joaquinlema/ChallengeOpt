import { GET_DATASOURCES, SET_ERROR, SET_CLOSE_SNACK, GET_CONNECTION } from "../../constants/Types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case GET_DATASOURCES:
            return {
                ...state,
                dataSourceList: action.payload,
                loading: false
            };
        case SET_ERROR:
            return {
                ...state,
                error: true,
                snackmsj: action.payload,
                snackStatus: true,
                snackSeverity: 'error'
            }
        case SET_CLOSE_SNACK:
            return {
                ...state,
                error: false,
                snackmsj: '',
                snackStatus: false,
                snackSeverity: 'info'
            }
        case GET_CONNECTION:
            return {
                ...state,
                connectionsList: action.payload,
                loading: false
            };
        default:
            return {
                ...state
            }
    }
};
