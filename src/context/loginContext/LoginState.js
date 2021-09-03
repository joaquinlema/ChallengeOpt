import { useReducer } from 'react';
import LoginContext from "./LoginContext";
import LoginReducer from "./LoginReducer";

const LoginState = (props) => {
    const initialState = {
        loading: false
    };

    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useReducer(LoginReducer, initialState);

    return (
        <LoginContext.Provider value={{
            loading :state.loading
        }}>
            {props.children}
        </LoginContext.Provider>

    );
};
export default LoginState;