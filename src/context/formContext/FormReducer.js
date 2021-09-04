import { GET_CONNECTION, SET_ERROR } from "../../constants/Types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
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
