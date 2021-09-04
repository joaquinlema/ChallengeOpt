import { GET_CONNECTION, SAVE_DATASOURCE, SET_ERROR } from "../../constants/Types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case SAVE_DATASOURCE:
            return {
                ...state,

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
