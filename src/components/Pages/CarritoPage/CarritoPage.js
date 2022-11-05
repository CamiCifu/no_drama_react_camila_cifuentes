import React from "react";
import { useCartContext } from "../../../Context/CartContext.js";

const CarritoPage = () => {
  const { cartList, vaciarCarrito, precioTotal } = useCartContext();

  const generarOrden = async (e) => {
    e.preventDefault();
    const orden = {};

    orden.buyer = {
      name: "cami",
      phone: "1234",
      email: "camis",
    };

    orden.items = cartList.map((prod) => {
      const { id, nombre: title, precio } = prod;
      return { id, title, precio };
    });

    orden.total = precioTotal();
    console.log(orden);
  };
  /*
      const db = getFirestore()
      const orders = collection(db, 'orders')
      addDoc(orders, orden) // setDoc(orders, obj, id)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
      .finally(() => vaciarCarrito())
     
  };

  const handleInputChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };
  console.log(dataForm);*/

  // falta is in cart y remove item y revision si no hay nada

  return (
    <div>
      <h1>CarritoPage</h1>
      <ul>
        {cartList.map((producto) => (
          <li>
            {" "}
            nombre: {producto.nombre} categoría:{producto.categoria} precio:{" "}
            {producto.precio} Cant: {producto.cantidad}{" "}
          </li>
        ))}
      </ul>
      <h2>Total: {precioTotal()}</h2>
      {/* fomulario para la orden */}

      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  );
};

export default CarritoPage;

/*
      <form onSubmit={generarOrden}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={dataForm.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          value={dataForm.phone}
          placeholder="Teléfono"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          value={dataForm.email}
          placeholder="Email"
          onChange={handleInputChange}
        />
        <button type="submit">Generar orden</button>
      </form>*/
