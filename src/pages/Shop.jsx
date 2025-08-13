import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Футболка", price: 999, image: "/tshirt.jpg" },
  { id: 2, name: "Джинсы", price: 1999, image: "/jeans.jpg" },
  { id: 3, name: "Кроссовки", price: 2999, image: "/sneakers.jpg" },
];

export default function Shop() {
  return (
    <div>
      <h2>Каталог товаров</h2>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
