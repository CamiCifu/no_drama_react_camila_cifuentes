import { useCartContext } from "../../Context/CartContext";

export function RevisionCarrito({ hola = true, children }) {
  //const { cantidadTotal } = useCartContext();
  //if ((hola = true)) {
  //  return <h1> Porfavor hace una compra</h1>;
  // }
  return <>{children}</>;
}
