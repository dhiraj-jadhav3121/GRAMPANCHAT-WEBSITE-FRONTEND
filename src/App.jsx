import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Lokseva from "./pages/Lokseva";
import ShaskiyaYojana from "./pages/ShaskiyaYojana";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Rojgar from "./pages/Rojgar";

import NalPatti from "./pages/NalPatti";
import GharPatti from "./pages/GharPatti";
import PropertyTax from "./pages/PropertyTax";
import WaterTax from "./pages/WaterTax";
import OtherPayment from "./pages/OtherPayment";
import Nidhi from "./pages/Nidhi";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lokseva" element={<Lokseva />} />
        <Route path="/shaskiya-yojana" element={<ShaskiyaYojana />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rojgar" element={<Rojgar />} />
        <Route path="/nidhi" element={<Nidhi />} />

        <Route path="/nal-patti" element={<NalPatti />} />
        <Route path="/ghar-patti" element={<GharPatti />} />
        <Route path="/property-tax" element={<PropertyTax />} />
        <Route path="/water-tax" element={<WaterTax />} />
        <Route path="/other-payment" element={<OtherPayment />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;