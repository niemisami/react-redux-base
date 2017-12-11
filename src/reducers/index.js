import React from 'react';
import { combineReducers } from 'redux';

const reducer = (state = { text: 'Initial value' }, action) => {
    switch (action) {
        case 'ADD_DATA':
            return {
                text: action.text
            }
        default:
            return state;
    }
}

const appReducer = combineReducers({
    reducer
});

export default appReducer;