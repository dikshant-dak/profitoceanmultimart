import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import women_banner from "./Components/Assets/banner_women.png";
import men_banner from "./Components/Assets/banner_mens.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import LoginSignup from "./Pages/LoginSignup";
import AboutUs from "./Pages/About/AboutUs";
import Vision from "./Pages/Vision/Vision";
import Contact from "./Pages/Contact/Contact";
import Terms from "./Pages/Terms/Terms";

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/mobiles" element={<ShopCategory banner={men_banner} category="mobiles" />} />
          <Route path="/laptops" element={<ShopCategory banner={men_banner} category="laptops" />} />
          <Route path="/televisions" element={<ShopCategory banner={men_banner} category="televisions" />} />
          <Route path="/refrigerators" element={<ShopCategory banner={men_banner} category="refrigerators" />} />
          <Route path="/washingmachines" element={<ShopCategory banner={men_banner} category="washingmachines" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/our-vision" element={<Vision />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
