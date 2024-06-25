import { Link } from "react-router-dom";
import type { Product } from "./SearchView";

const SearchViewItem = ({ product }: { product: Product }): JSX.Element => {
  return (
    <li key={product.id}>
      <Link to={`/product/${product.id}`} className="product-list-item">
        <div>{product.name}</div>
        <div>{product.category}</div>
        <div>{product.price} SEK</div>
      </Link>
    </li>
  );
};

export default SearchViewItem;
