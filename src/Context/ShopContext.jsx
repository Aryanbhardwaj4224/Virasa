import { createContext } from "react";
import { products } from "../assets/assets"; 
// 1️⃣ Create Context 
export const ShopContext = createContext();

/*
    (ShopContextProvider) component is passing an array of objects (products) inside the value object.
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
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;