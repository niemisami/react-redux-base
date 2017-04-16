import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import shop, * as fromShop from './shopReducer';

const rootReducer = combineReducers({
  shop,
  routing: routerReducer
});

export const getCartProducts = state => {
  fromShop.getShoppingCart(state.shop);
}

export const getProducts = state => {
  fromShop.getProducts(state.shop);
}

export default rootReducer;