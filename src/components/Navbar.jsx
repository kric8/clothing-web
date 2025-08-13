import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/shop">Магазин</Link>
    </nav>
  );
}
