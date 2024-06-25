import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchView from "./SearchView";

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchView />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
