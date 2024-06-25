import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchView from "./SearchView";
import ProductDetailView from "./ProductDetailsView";

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchView />}></Route>
        <Route path="/product/:id" element={<ProductDetailView />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
