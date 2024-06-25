import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "./axiousConfig";

import type { Product } from "./SearchView";

const ProductDetailView = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="product-name">{product.name}</h2>
      <div className="product-category">Category: {product.category}</div>
      <div className="product-category">Description: {product.desription}</div>
      <div className="product-price">Price {product.price} SEK</div>
    </div>
  );
};

export default ProductDetailView;
