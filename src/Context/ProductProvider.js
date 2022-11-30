import React, { createContext, useContext, useEffect, useState } from 'react';
const ProductContext = createContext();
const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json').then(res => res.json()).then(data => setProducts(data));
    }, []);
const value = { products };
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