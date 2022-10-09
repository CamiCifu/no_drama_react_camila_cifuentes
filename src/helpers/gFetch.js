const productos = [
  {
    id: 12345,
    name: "campera impermeable M",
    description: "nueva temporada, impermeable,talle M",
    stock: 15,
  },
  {
    id: 23451,
    name: "campera impermeable S",
    description: "nueva temporada, impermeable,talle S",
    stock: 20,
  },
];

export const gFetch = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(productos);
    }, 3000);
  });
};
