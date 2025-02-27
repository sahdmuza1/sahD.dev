import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Hide Navbar if on the Welcome page
  if (location.pathname === "/") return null;

  return (
    <nav className="bg-gray-800 text-white p-4">
      <h1 className="text-xl">Navbar</h1>
    </nav>
  );
}
