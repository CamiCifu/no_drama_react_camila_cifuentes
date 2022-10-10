const productos = [
  {
    id: 12345,
    nombre: "campera impermeable M",
    descripcion: "nueva temporada, impermeable,talle M",
    categoria: "Invierno 2022",
    foto: "",
    stock: 15,
    precio: 500,
  },
  {
    id: 23451,
    nombre: "campera impermeable S",
    descripcion: "nueva temporada, impermeable,talle S",
    categoria: "Invierno 2022",
    foto: "",
    stock: 20,
    precio: 450,
  },
];

export const gFetch = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(productos);
    }, 3000);
  });
};
