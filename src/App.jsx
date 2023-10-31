import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import SingleProduct from "./pages/SingleProduct";

import "bootstrap/dist/css/bootstrap.min.css";
//leaving google fonts,
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:productId" element={<SingleProduct />} />
            <Route path="posts" element={<Posts />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
