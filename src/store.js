import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import { initialState, actions } from './actions';

const StoreContext = createContext(initialState);

const reducer = (state, action) => {
    const act = actions[action.type];
    const update = act(state, action.payload);

    return { ...state, ...update };
};

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

StoreProvider.propTypes = {
    children: PropTypes.node,
};

export const useStore = () => {
    const { state, dispatch } = useContext(StoreContext);

    return { state, dispatch };
};
