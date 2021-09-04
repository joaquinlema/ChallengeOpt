import { useReducer } from 'react';
import { GET_CONNECTION, INIT_FORM, SAVE_DATASOURCE, SET_CLOSE_SNACK, SET_ERROR, SET_LOADING } from "../../constants/Types";
import ConnectionsService from "../../api/service/Connections.service";
import FormContext from "./FormContext";
import FormReducer from "./FormReducer";
import DataSourceService from '../../api/service/DataSource.service';

const FormState = (props) => {
    const initialState = {
        loading: false,
        error: false,
        snackmsj: '',
        connectionList: [],
        snackStatus: false,
        save: false,
        snackSeverity: 'info'
    };

    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useReducer(FormReducer, initialState);

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

    const initForm = () => {
        dispatch({
            type: INIT_FORM,
        });
    }

    const saveDataSource = async (newDataSource) => {

        try {
            const { data } = await DataSourceService.create(newDataSource);

            dispatch({
                type: SAVE_DATASOURCE,
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
            payload: 'ups Error Por favor revise los campos'
        });
    }

    const onCloseSnack = () => {
        dispatch({
            type: SET_CLOSE_SNACK,
        });
    };

    return (
        <FormContext.Provider value={{
            loading: state.loading,
            connectionList: state.connectionList,
            error: state.error,
            save: state.save,
            snackmsj: state.snackmsj,
            snackStatus: state.snackStatus,
            snackSeverity: state.snackSeverity,
            onCloseSnack,
            setError,
            setLoading,
            getConnections,
            saveDataSource,
            initForm
        }}>
            {props.children}
        </FormContext.Provider>

    );
};
export default FormState;