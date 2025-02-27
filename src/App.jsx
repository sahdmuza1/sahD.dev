import { Routes, Route, useLocation } from "react-router-dom";
import Welcome from "./Pages/welcome";
import Navbar from "./components/Navbar";


export default function App() {
  const location = useLocation();
  
  // Hide Navbar on the Welcome page
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </>
  );
}
