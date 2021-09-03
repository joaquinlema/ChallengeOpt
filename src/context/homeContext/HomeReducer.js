import { GET_DATASOURCES, SET_ERROR } from "../../constants/Types";

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
                errorMsj: action.payload,
                snackStatus:true
            }
        default:
            return {
                ...state
            }
    }
};
