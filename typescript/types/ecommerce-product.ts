interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 55000, inStock: true },
  { id: 2, name: "Keyboard", price: 1500, inStock: false },
  { id: 3, name: "Mouse", price: 800, inStock: true }
];

const availableProducts = products.filter(product => product.inStock);

console.log("Available Products:");
availableProducts.forEach(product => {
  console.log(`${product.name} - ₹${product.price}`);
});
