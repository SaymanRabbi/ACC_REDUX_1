import { ActionTypes } from "./ActionTypes";

export const initialState = {
    loading:false,
    products:[],
    error:false,
    cart:[]
}

export const ProductReducer = (state,action)=>{
    switch (action.type) {
        case ActionTypes.FETCH_START:
            return {
                ...state,
                loading:true
            }
        case ActionTypes.FETCH_SUCCESS:
            return {
                ...state,
                loading:false,
                products:action.payload
            }
        case ActionTypes.FETCH_ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        case ActionTypes.ADD_CART:
            return {
                ...state,
                cart:[...state.cart,action.payload],
            }
        case ActionTypes.REMOVE_CART:
            return {
                ...state,
                cart:state.cart.filter((item)=>item.id !== action.payload.id)
            }
        default:
            return state;
    }
}