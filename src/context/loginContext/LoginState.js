import { useReducer } from "react-transition-group/node_modules/@types/react";
import LoginContext from "./LoginContext";
import LoginReducer from "./LoginReducer";

const LoginState = (props: any) => {
    const initialState = {
        loading: false
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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