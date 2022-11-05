import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  //estados globales
  const [cartList, setCartList] = useState([]);

  // funcion para agregar al carrito

  const addItem = (producto) => {
    const index = cartList.findIndex((prod) => producto.id === prod.id);
    if (index == -1) {
      setCartList([...cartList, producto]);
    } else {
      cartList[index].cantidad += producto.cantidad;
      setCartList(...[cartList, producto]);
    }
  };

  //funcion para vaciar el carrito
  const vaciarCarrito = () => {
    setCartList([]);
  };

  //funcion para ver si el producto ya esta en el carrito
  const isInCart = (id) => {
    return cartList.some((item) => item.id === id);
  };
  //funcion de precio Total
  const precioTotal = () => {
    return cartList.reduce(
      (acum, prod) => acum + prod.cantidad * prod.precio,
      0
    );
  };

  //funcion de cantidad Total
  const cantidadTotal = () => {
    return cartList.reduce((acum, prod) => (acum += prod.cantidad), 0); // acum = acum + cantidad
  };

  // funcion para remove item
  const removeItem = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        vaciarCarrito,
        isInCart,
        precioTotal,
        cantidadTotal,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
