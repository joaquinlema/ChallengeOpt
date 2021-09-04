import HomeContext from "./HomeContext";
import HomeReducer from "./HomeReducer";
import { useReducer } from 'react';
import { GET_CONNECTION, GET_DATASOURCES, SET_CLOSE_SNACK, SET_ERROR, SET_LOADING } from "../../constants/Types";
import DataSourceService from "../../api/service/DataSource.service";
import ConnectionsService from "../../api/service/Connections.service";

const HomeState = (props) => {
    const initialState = {
        loading: false,
        error: false,
        snackmsj: '',
        dataSourceList: [],
        connectionsList:[],
        snackStatus: false,
        dialogStatus: false,
        save: false,
        snackSeverity: 'info'
    };

    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useReducer(HomeReducer, initialState);

    const getDataSources = async () => {

        try {
            const { data } = await DataSourceService.getAll('total=false');

            dispatch({
                type: GET_DATASOURCES,
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

    const onCloseSnack = () => {
        dispatch({
            type: SET_CLOSE_SNACK,
        });
    };

    const setError = (error) => {
        dispatch({
            type: SET_ERROR,
            payload: 'ups Error'
        });
    }

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

    return (
        <HomeContext.Provider value={{
            loading: state.loading,
            dataSourceList: state.dataSourceList,
            error: state.error,
            snackmsj: state.snackmsj,
            snackStatus: state.snackStatus,
            snackSeverity: state.snackSeverity,
            connectionsList:state.connectionsList,
            getConnections,
            setError,
            setLoading,
            getDataSources,
            onCloseSnack
        }}>
            {props.children}
        </HomeContext.Provider>

    );
};
export default HomeState;