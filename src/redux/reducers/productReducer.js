import { FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../actions/actionTypes';

const initialState = {
    loading: false,
    data: [],
    error: null
};

const productReducer = (state = initialState, action) => {
      switch(action.type) {
           case FETCH_PRODUCTS_BEGIN: 
                 return {
                     ...state,
                     loading: true,
                 }
           case FETCH_PRODUCTS_SUCCESS:
                    return {
                        ...state,
                        loading: false,
                        data: action.payload,
                        error: null
                    }
          case FETCH_PRODUCTS_FAILURE:
                    return {
                        ...state,
                        loading: false,
                        data: [],
                        error: action.payload
                    }
            default:
                    return state
      }
}


export default productReducer;