import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { useCartContext } from "../../../Context/CartContext.js";

const CarritoPage = () => {
  const [idCompra, setIdCompra] = useState();
  const [dataForm, setDataForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const { cartList, vaciarCarrito, precioTotal, removeItem } = useCartContext();

  const generarOrden = async (e) => {
    e.preventDefault();
    const orden = {};

    orden.buyer = {
      name: dataForm.nombre,
      phone: dataForm.telefono,
      email: dataForm.email,
    };

    orden.items = cartList.map((prod) => {
      const { id, nombre: title, precio } = prod;
      return { id, title, precio };
    });

    orden.total = precioTotal();
    console.log(orden);

    const db = getFirestore();
    const orders = collection(db, "orders");
    addDoc(orders, orden)
      .then((resp) => setIdCompra(resp.id))
      .catch((err) => console.log(err))
      .finally(() => vaciarCarrito());
  };

  //funcion para el form
  const handleInputChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };
  console.log(dataForm);

  // agregar remove item, que si no hay nada aprezca el caartel "compra algo" remove item y revision si no hay nada, si una  parte del form esta vacia no debe dejar que se envie, tambien si cantidad total es igual a cero

  return (
    <div>
      <h1> ¡Carrito de compras!</h1>
      {idCompra && <h2> Orden generado con éxito: {idCompra}</h2>}
      <ul>
        {cartList.map((producto) => (
          <li>
            {" "}
            nombre: {producto.nombre} categoría:{producto.categoria} precio:{" "}
            {producto.precio} Cant: {producto.cantidad}{" "}
            <button onClick={() => removeItem(producto.id)}>
              {" "}
              Remover productos
            </button>
          </li>
        ))}
      </ul>
      <h2>Total: {precioTotal()}</h2>
      {/* fomulario para la orden */}
      <form onSubmit={generarOrden}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={dataForm.nombre}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="telefono"
          value={dataForm.telefono}
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
      </form>

      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  );
};

export default CarritoPage;
