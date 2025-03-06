import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Hide Navbar on the Welcome page
  if (location.pathname === "/") return null;

  return (
    <nav className="bg-white text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-400">
          sahD.dev
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/home" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          <Link to="/projects" className="hover:text-blue-400 transition">Projects</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none">
          ☰
        </button>
      </div>
    </nav>
  );
}
