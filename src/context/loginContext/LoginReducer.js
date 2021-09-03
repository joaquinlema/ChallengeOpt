// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case 'SET_PISO':
            return {
                ...state,
                pisoOpciones: action.payload
            };
            default:
                return {
            ...state
        }
    }
};
