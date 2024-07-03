export const products: Product[] = [
  {
    id: 1,
    brand: 'Apple',
    model: 'iPhone 15 Pro Max',
    price: 1499,
    img: "src/assets/products-img/iPhone15ProMax.jpg",
  },
  {
    id: 2,
    brand: 'Xiaomi',
    model: 'Redmi Note 13 Pro 5G',
    price: 399,
    img: "src/assets/products-img/RedmiNote13Pro5G.jpg",
  },
  {
    id: 3,
    brand: 'Poco',
    model: 'X6 Pro',
    price: 450,
    img: "src/assets/products-img/X6Pro.jpg",
  },
  {
    id: 4,
    brand: 'Apple',
    model: 'iPhone 13',
    price: 700,
    img: "src/assets/products-img/iPhone13.jpg",
  },
  {
    id: 5,
    brand: 'POCO',
    model: 'M6 Pro',
    price: 250,
    img: "src/assets/products-img/M6Pro.jpg",
  },
  {
    id: 6,
    brand: 'Samsung',
    model: 'Galaxy S24 Ultra',
    price: 950,
    img: "src/assets/products-img/GalaxyS24Ultra.jpg",
  },
  {
    id: 7,
    brand: 'Samsung',
    model: 'Galaxy S24 Plus',
    price: 800,
    img: "src/assets/products-img/GalaxyS24Plus.jpg",
  },
  {
    id: 8,
    brand: 'Xiaomi',
    model: 'Redmi Note 13 Pro 4G',
    price: 250,
    img: "src/assets/products-img/RedmiNote13Pro4G.jpg",
  },
  {
    id: 9,
    brand: 'Google',
    model: 'Pixel 7',
    price: 400,
    img: "src/assets/products-img/Pixel7.jpg",
  },
  {
    id: 10,
    brand: 'Google',
    model: 'Pixel 8',
    price: 700,
    img: "src/assets/products-img/Pixel8.jpg",
  }
]

export interface Product {
  readonly id: number,
  brand: string,
  model: string,
  price: number,
  img: string,
}
