import { GET_CONNECTION, INIT_FORM, SAVE_DATASOURCE, SET_ERROR } from "../../constants/Types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case INIT_FORM:
            return {
                ...state,
                save:false,
                error:false
            }
        case SAVE_DATASOURCE:
            return {
                ...state,
                save:true
            }
        case GET_CONNECTION:
            return {
                ...state,
                connectionList: action.payload,
                loading: false
            };
        case SET_ERROR:
            return {
                ...state,
                error: true,
                snackmsj: action.payload,
                snackStatus:true,
                snackSeverity:'error'
            }
        default:
            return {
                ...state
            }
    }
};
