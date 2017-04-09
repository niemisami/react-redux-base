import * as types from './actionTypes';


export function increment() {
    return { type: types.INCREMENT_VALUE };    
}
export function decrement() {
    return { type: types.DECREMENT_VALUE };    
}