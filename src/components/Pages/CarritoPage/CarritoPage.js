import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../Context/CartContext.js";
import "../CarritoPage/CarritoPage.scss";

const CarritoPage = () => {
  const [idCompra, setIdCompra] = useState();
  const [dataForm, setDataForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    emailValidacion: "",
  });

  const { cartList, vaciarCarrito, precioTotal, removeItem } = useCartContext();

  const generarOrden = async (e) => {
    e.preventDefault();
    const orden = {};

    orden.buyer = {
      name: dataForm.nombre,
      phone: dataForm.telefono,
      email: dataForm.email,
      emailValidacion: dataForm.emailValidacion,
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

  const handleInputChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };
  console.log(dataForm);

  return (
    <div>
      <h1> Carrito de compras</h1>
      {idCompra && <h2> Orden generado con éxito: {idCompra}</h2>}
      {cartList.length === 0 ? (
        <div>
          <h2> En el incio podras realizar nuevas compras!</h2>
          <Link to="/"> Ir a comprar</Link>
        </div>
      ) : (
        <div>
          <ul>
            {cartList.map((producto) => (
              <li>
                {" "}
                Producto: {producto.nombre} Categoría: {producto.categoria}{" "}
                Precio: $ {producto.precio} Cantidad: {producto.cantidad}{" "}
                <button
                  className="botonVaciarCarrito"
                  onClick={() => removeItem(producto.id)}
                >
                  {" "}
                  Remover productos
                </button>
              </li>
            ))}
          </ul>
          <h2>Total: $ {precioTotal()}</h2>
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
            <input
              type="text"
              name="emailValidacion"
              value={dataForm.emailValidacion}
              placeholder="Confirmar email"
              onChange={handleInputChange}
            />
            {dataForm.nombre === "" ||
            dataForm.telefono === "" ||
            dataForm.email === "" ||
            dataForm.emailValidacion != dataForm.email ? (
              <h3>
                {" "}
                Por favor completa correctamente los datos para continuar con la
                compra
              </h3>
            ) : (
              <button type="submit">Generar orden</button>
            )}
          </form>

          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
};

export default CarritoPage;
