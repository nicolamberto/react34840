
import React, {createContext} from "react";
import { useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

    return (
        <CartContext.Provider value={{allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider;

