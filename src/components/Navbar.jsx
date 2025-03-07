import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Hide Navbar on the Welcome page
  if (location.pathname === "/") return null;

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-500">
          sahD.dev
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-500 focus:outline-none text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center py-4 space-y-4">
            <NavLink to="/home" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

// Custom NavLink Component for Styling
const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    className="text-blue-500 font-semibold hover:text-blue-700 transition"
    onClick={onClick}
  >
    {children}
  </Link>
);
