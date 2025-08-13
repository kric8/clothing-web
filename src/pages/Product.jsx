import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Футболка",
    price: 999,
    description: "Мягкая хлопковая футболка",
  },
  {
    id: 2,
    name: "Джинсы",
    price: 1999,
    description: "Классические синие джинсы",
  },
  {
    id: 3,
    name: "Кроссовки",
    price: 2999,
    description: "Удобные спортивные кроссовки",
  },
];

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div>Товар не найден</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Цена: {product.price} ₽</p>
      <p>{product.description}</p>
      <button>Добавить в корзину</button>
    </div>
  );
}
