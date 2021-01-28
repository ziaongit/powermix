export const countAction = {
    ADD: (state, payload) => {
        return {
            ...state,
            globalValue: parseInt(state.globalValue) + parseInt(payload),
        };
    },
    ADD_INPUT: (state, payload) => {
        return {
            ...state,
            globalInput: payload,
        };
    },
};
