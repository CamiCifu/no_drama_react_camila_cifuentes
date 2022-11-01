import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  //estados globales
  const [cartList, setCartList] = useState([]);

  // funcion para agregar al carrito

  const addItem = (producto) => {
    setCartList([...cartList, producto]);
  };

  return (
    <CartContext.Provider value={{ cartList, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
