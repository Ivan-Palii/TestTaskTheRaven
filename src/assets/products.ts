export const products: Product[] = [
  {
    id: 1,
    brand: 'Apple',
    model: 'iPhone 15 Pro Max',
    price: 1499,
    img: "https://s.ek.ua/jpg_zoom1/2529964.jpg",
  },
  {
    id: 2,
    brand: 'Xiaomi',
    model: 'Redmi Note 13 Pro 5G',
    price: 399,
    img: "https://s.ek.ua/jpg_zoom1/2539467.jpg",
  },
  {
    id: 3,
    brand: 'Poco',
    model: 'X6 Pro',
    price: 450,
    img: "https://s.ek.ua/jpg_zoom1/2585535.jpg",
  },
  {
    id: 4,
    brand: 'Apple',
    model: 'iPhone 13',
    price: 700,
    img: "https://s.ek.ua/jpg_zoom1/2090045.jpg",
  },
  {
    id: 5,
    brand: 'POCO',
    model: 'M6 Pro',
    price: 250,
    img: "https://s.ek.ua/jpg_zoom1/2606917.jpg",
  },
  {
    id: 6,
    brand: 'Samsung',
    model: 'Galaxy S24 Ultra',
    price: 950,
    img: "https://s.ek.ua/jpg_zoom1/2603099.jpg",
  },
  {
    id: 7,
    brand: 'Samsung',
    model: 'Galaxy S24 Plus',
    price: 800,
    img: "https://s.ek.ua/jpg_zoom1/2603100.jpg",
  },
  {
    id: 8,
    brand: 'Xiaomi',
    model: 'Redmi Note 13 Pro 4G',
    price: 250,
    img: "https://s.ek.ua/jpg_zoom1/2596787.jpg",
  },
  {
    id: 9,
    brand: 'Google',
    model: 'Pixel 7',
    price: 400,
    img: "https://s.ek.ua/jpg_zoom1/2287767.jpg",
  },
  {
    id: 10,
    brand: 'Google',
    model: 'Pixel 8',
    price: 700,
    img: "https://s.ek.ua/jpg_zoom1/2529693.jpg",
  }
]

export interface Product {
  readonly id: number,
  brand: string,
  model: string,
  price: number,
  img: string,
}
