import { FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from './actionTypes';
import axios from 'axios';

export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
});

export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
});


export function fetchProducts() {
    return async (dispatch) => {
           dispatch(fetchProductsBegin)
           try{
               const response = await axios.get('https://dummyjson.com/products')
               dispatch(fetchProductsSuccess(response.data.products))
           }
              catch(error){
                dispatch(fetchProductsFailure(error))
              }
    }
}

