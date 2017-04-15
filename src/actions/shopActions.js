import * as types from './actionTypes';
import axios from 'axios';

//TODO: change functions to ES6 arrow consts 

export function requestProducts() {
    return {
        type: types.REQUEST_PRODUCTS
    };
}
export function receiveProducts(products, error) {
    return {
        type: types.RECEIVE_PRODUCTS,
        products: products,
        error: error
    }
}

export function requestUsers() {
    return {
        type: types.REQUEST_USERS
    };
}
export function receiveUsers(users, error) {
    return {
        type: types.RECEIVE_USERS,
        users: users,
        error: error
    }
}

export function addProductToShoppingCart(product) {
    return {
        type: types.ADD_PRODUCT_TO_CART,
        product: product
    };
}
export function removeProductFromShoppingCart(index) {

    return {
        type: types.REMOVE_PRODUCT_FROM_CART,
        index: index
    };
}

export function attemptToBuyProducts(userId, products) {
    return {
        type: types.BUY_PRODUCTS,
        userId: userId,
        products
    };
}

export function displayConfirmationModal() {
    return { type: types.DISPLAY_CONFIRMATION_MODAL };
}

export function hideConfirmationModal() {
    return { type: types.HIDE_CONFIRMATION_MODAL };
}


export const fetchProducts = () => (dispatch, getState) => {
    dispatch(requestProducts());

    return axios.get('/products')
        .then(response => response.json())
        .then(products => {
            dispatch(receiveProducts(products, false))
        }).catch(errors => {
            console.log(errors);
            dispatch(receiveProducts(errors, true))
        });
}

export const fetchUsers = () => (dispatch, getState) => {
    dispatch(requestUsers());

    return axios.get('/wallofshame')
        .then(response => response.json())
        .then(users => {
            console.log(users);
            dispatch(receiveUsers(users, false))
        }).catch(errors => {
            console.log(errors);
            dispatch(receiveUsers(errors, true))
        });
}