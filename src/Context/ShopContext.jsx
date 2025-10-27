import { createContext } from "react";
import { products } from "../assets/assets"; 
// 1️⃣ Create Context 
export const ShopContex = createContext();

/*
    (ShopContextProvider) is passing an array of objects (products) inside the value object.
    Then it provides that data to all child components using the Context Provider.
*/ 

const ShopContextProvider = ({children})=>{
    
    const currency = '₹';
    const delivery_fee=10;

    const value = {
        products,currency,delivery_fee
    }
    return (
        // 2️⃣ Provide Context 
        <ShopContex.Provider value={value}>
            {children}
        </ShopContex.Provider>
    )
}

export default ShopContextProvider;