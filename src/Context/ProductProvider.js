import React, { useEffect, useState } from 'react';

const ProductContext = createContext();
const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        fetch("products.json").then(res => res.json()).then(data => setProducts(data.data));
    }, []);
const value = { products };
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;