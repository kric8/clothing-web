import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Футболка",
    price: 999,
    image:
      "https://jimivain.com/cdn/shop/files/fw25_zip_lether_gloves_1_1500x.jpg?v=1756113954",
  },
  {
    id: 2,
    name: "Джинсы",
    price: 1999,
    image:
      "https://jimivain.com/cdn/shop/files/fw25_three_zip_hoodie_bloody_red_0_1500x.jpg?v=1756113733",
  },
  {
    id: 3,
    name: "Кроссовки",
    price: 2999,
    image:
      "https://jimivain.com/cdn/shop/files/vain-fw25-faces-of-love-hoodie-0_1500x.jpg?v=1740758084",
  },
  {
    id: 1,
    name: "Футболка",
    price: 999,
    image:
      "https://jimivain.com/cdn/shop/files/vain-upcycled-jeans-003-blue-vain-vain-s-267121_1500x.jpg?v=1721417893",
  },
  {
    id: 1,
    name: "Футболка",
    price: 999,
    image:
      "https://jimivain.com/cdn/shop/files/vain-ss25-selene-dress-0_1500x.jpg?v=1741094487",
  },
  {
    id: 1,
    name: "Футболка",
    price: 999,
    image:
      "https://jimivain.com/cdn/shop/files/vain-drawstring-pants-married-to-the-vain-vain-vain-s-740421_1500x.jpg?v=1726223727",
  },
];

export default function Shop() {
  return (
    <div>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
