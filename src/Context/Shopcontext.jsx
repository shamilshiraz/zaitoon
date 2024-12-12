import { createContext } from "react";
import { products } from "../assets/store";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const value = {
    products,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
