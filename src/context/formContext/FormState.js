import FormContext from "./FormContext";
import HomeReducer from "./HomeReducer";
import { useReducer } from 'react';
import { GET_CONNECTION, SET_ERROR, SET_LOADING } from "../../constants/Types";
import ConnectionsService from "../../api/service/Connections.service";

const FormState = (props) => {
    const initialState = {
        loading: false,
        error: false,
        connectionList: [],
        save: false,
    };

    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useReducer(HomeReducer, initialState);

    const getConnections = async () => {

        try {
            const { data } = await ConnectionsService.getAll('total=false');

            dispatch({
                type: GET_CONNECTION,
                payload: data.data
            });
        } catch (error) {
            setError(error);
        }

    }

    const setLoading = (status) => {
        dispatch({
            type: SET_LOADING,
            payload: status
        });
    };

    const setError = (error) => {
        dispatch({
            type: SET_ERROR,
            payload: 'ups Error'
        });
    }

    return (
        <FormContext.Provider value={{
            loading: state.loading,
            connectionList: state.connectionList,
            error: state.error,
            setError,
            setLoading,
            getConnections,
        }}>
            {props.children}
        </FormContext.Provider>

    );
};
export default FormState;