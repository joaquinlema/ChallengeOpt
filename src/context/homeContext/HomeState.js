import HomeContext from "./HomeContext";
import HomeReducer from "./HomeReducer";
import { useReducer } from 'react';
import { GET_DATASOURCES, SET_ERROR, SET_LOADING } from "../../constants/Types";
import DataSourceService from "../../api/service/DataSource.service";

const HomeState = (props) => {
    const initialState = {
        loading: false,
        error:false,
        errorMsj:'',
        dataSourceList:[],
        snackStatus:false,
        dialogStatus:false,
        save:false,
    };

    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useReducer(HomeReducer, initialState);

    const getDataSources = async  () => {

        try {
            const {data} = await DataSourceService.getAll('total=false');

            dispatch({
                type:GET_DATASOURCES,
                payload:data
            });
        } catch (error) {
            setError(error);
        }
        
    }

    const setLoading = (status) => {
        dispatch({
            type:SET_LOADING,
            payload: status
        });
    };

    const setError = (error) => {
        dispatch({
            type:SET_ERROR,
            payload: error
        });
    }

    return (
        <HomeContext.Provider value={{
            loading :state.loading,
            dataSourceList:state.dataSourceList,
            setError,
            setLoading,
            getDataSources
        }}>
            {props.children}
        </HomeContext.Provider>

    );
};
export default HomeState;