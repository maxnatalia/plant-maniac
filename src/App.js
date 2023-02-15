import { Routes, Route, HashRouter } from "react-router-dom";
import HomePage from "./features/HomePage";
import AboutPage from "./features/AboutPage";
import ErrorPage from "./features/ErrorPage";
import Navigation from "./common/Navigation";
import Footer from "./common/Footer";
import LoginPage from "./features/LoginPage";
import ProductsPage from "./features/ProductsPage";
import Newsletter from "./common/Newsletter";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Newsletter />
      <Footer />
    </HashRouter>
  );
}

export default App;
