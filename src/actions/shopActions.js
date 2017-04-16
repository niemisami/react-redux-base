import * as types from './actionTypes';
import axios from 'axios';
import dateformat from 'dateformat';

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

export function displayConfirmationModal() {
    return { type: types.DISPLAY_CONFIRMATION_MODAL };
}

export function hideConfirmationModal() {
    return { type: types.HIDE_CONFIRMATION_MODAL };
}


export const fetchProducts = () => (dispatch, getState) => {
    dispatch(requestProducts());

    return axios.get('/product')
        .then(response => {
            if (response.status === 200) {
                dispatch(receiveProducts(response.data.products, false))
            } else {
                console.log("TODO: HANDLE ERROR")
            }

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

export const checkout = (products, userId) => (dispatch, getState) => {
    dispatch({
        type: types.CHECKOUT_REQUEST
    })
    if (!products || products.length < 1 || !userId || userId < 0) {
        dispatch({
            type: types.CHECKOUT_FAIL
        })
    } else {
        let success = dispatch({
            type: types.CHECKOUT_SUCCESS
        })
        let failure = dispatch({
            type: types.CHECKOUT_FAIL
        })
        buyProducts(products, userId, success, failure)

    }
}

const buyProducts = (products, userId, success, failure) => {
    // Currently the API supports bying products only one by one
    products.map((product, index) => {
        let now = new Date();
        let purchase = {
            participant_rfid: userId,
            event: product.name,
            date: dateformat(now, "yyyy-mm-dd"),
            time: dateformat(now, "hh:mm:ss.l")
        }

        axios.post('/purchase', {
            purchase: purchase
        }
        ).then(response => {
            if (response.statusCode != 200) {
                return new Promise.reject('purchase failed: ' + response.statusCode);
            }
            response.json().then(json => {
                if (index === products.length - 1) {
                    success();
                }
            })
        }).catch(errors => {
            failure();
        });
    });
}