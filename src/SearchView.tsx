import React, { useCallback, useState } from "react";
import axios from "./axiousConfig";
import { debounce } from "lodash";
import SearchViewItem from "./SearchViewItem";

interface Product {
  id: number;
  name: string;
  category: string;
  desription: string;
  price: number;
  imageUrl: string;
}

const SearchView = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      axios
        .get(`/products/search?q=${query}`)
        .then((response) => {
          setSearchResults(response.data);
        })
        .catch((error) => {
          console.error("Error searching products:", error);
        });
    }, 500),
    []
  ); // Debounce time in milliseconds

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);
    debouncedSearch(query);
  };

  return (
    <div>
      <h1>Product Search</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {searchResults.map((product: Product) => (
          <SearchViewItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default SearchView;

export type { Product };
