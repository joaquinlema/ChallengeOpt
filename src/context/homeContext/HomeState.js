import HomeContext from "./HomeContext";
import HomeReducer from "./HomeReducer";
import { useReducer } from 'react';

const HomeState = (props) => {
    const initialState = {
        loading: false,
        error:false,
        errorMsj:'',
        dataSourceList:[],
        dialogStatus:false,
        save:false,

    };

    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useReducer(HomeReducer, initialState);

    const setLoading = (status) => dispatch => {
        dispatch({
            type:'',
            payload: status
        });
    };

    const setError = (error) => dispatch => {
        dispatch({
            type:'',
            payload: error
        })
    }

    return (
        <HomeContext.Provider value={{
            loading :state.loading,
            dataSourceList:state.dataSourceList,
            setError,
            setLoading
        }}>
            {props.children}
        </HomeContext.Provider>

    );
};
export default HomeState;