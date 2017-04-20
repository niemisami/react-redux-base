import * as types from './actionTypes';
import axios from 'axios';
import dateformat from 'dateformat';

//TODO: change functions to ES6 arrow consts 


export const fetchProducts = () => dispatch => {
    axios.get('/api/product')
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

const receiveProducts = (products, error) => ({
    type: types.RECEIVE_PRODUCTS,
    products: products,
    error: error
})


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

export const addProductToShoppingCart = product => (dispatch) => {
    dispatch({
        type: types.ADD_PRODUCT_TO_CART,
        product: product
    });
}

export const removeProductFromShoppingCart = index => (dispatch) => {
    dispatch({
        type: types.REMOVE_PRODUCT_FROM_CART,
        index: index
    });
}

export function displayConfirmationModal() {
    return { type: types.DISPLAY_CONFIRMATION_MODAL };
}

export function hideConfirmationModal() {
    return { type: types.HIDE_CONFIRMATION_MODAL };
}



export const fetchUsers = () => (dispatch, getState) => {
    dispatch(requestUsers());

    return axios.get('/api/wallofshame')
        .then(response => response.json())
        .then(users => {
            console.log(users);
            dispatch(receiveUsers(users, false))
        }).catch(errors => {
            console.log(errors);
            dispatch(receiveUsers(errors, true))
        });
}

export const checkout = (products) => (dispatch, getState) => {
    let userId = getState().shop.userId;
    dispatch({
        type: types.CHECKOUT_REQUEST
    });
    if (!products || products.length < 1 || !userId) {
        dispatch({
            type: types.CHECKOUT_FAIL
        });
    }
}

export const buyProducts = (products) => (dispatch, getState) => {
    let success = dispatch({
        type: types.CHECKOUT_SUCCESS
    })
    let failure = dispatch({
        type: types.CHECKOUT_FAIL
    })
    let userId = getState().shop.userId;
    postPurchase(products, userId, success, failure)
}

const postPurchase = (products, userId, success, failure) => {
    // Currently the API supports bying products only one by one
    products.map((product, index) => {
        let now = new Date();
        let purchase = {
            participant_rfid: userId,
            event: product.name,
            date: dateformat(now, "yyyy-mm-dd"),
            time: dateformat(now, "hh:mm:ss.l")
        }

        axios.post('/api/purchase/' + userId, {
            purchase: purchase
        }
        ).then(response => {
            if (response.status != 200) {
                console.log("ERROR: " + response.status)
            }
            if (index === products.length - 1) {
                () => success();
            }
        }).catch(errors => {
            console.log(errors);
            () => failure();
        });
    });
}