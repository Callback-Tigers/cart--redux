import {createStore, applyMiddleware, combineReducers} from 'redux';

import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;