import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { ActionTypes } from '../State/ActionTypes';
import { initialState, ProductReducer } from '../State/ProductState';
const ProductContext = createContext();
const ProductProvider = ({children}) => {
    const [state,dispatch] = useReducer(ProductReducer,initialState)
    useEffect(() => {
        dispatch({type:ActionTypes.FETCH_START})
        fetch('./products.json').then(res => res.json()).then(data => dispatch({type:ActionTypes.FETCH_SUCCESS,payload:data})).catch(err => dispatch({type:ActionTypes.FETCH_ERROR,payload:err}));
    }, []);
const value = { state, dispatch };
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};
export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;
}
export default ProductProvider;