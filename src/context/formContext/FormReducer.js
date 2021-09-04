import { INIT_FORM, SAVE_DATASOURCE, SET_CLOSE_SNACK, SET_ERROR } from "../../constants/Types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case INIT_FORM:
            return {
                ...state,
                save: false,
                error: false
            }
        case SAVE_DATASOURCE:
            return {
                ...state,
                save: true,
            }
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
        default:
            return {
                ...state
            }
    }
};
