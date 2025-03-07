import { Routes, Route, useLocation } from "react-router-dom";
import Welcome from "./Pages/welcome";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();
  
  // Hide Navbar on the Welcome page
  const hideNavbar = location.pathname === "/";
  const hideFooter = location.pathname === "/";


  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} /> {/* Add Home Route */}
      </Routes>
     // {!hideFooter && <Footer />}//
    </>
  );
}
