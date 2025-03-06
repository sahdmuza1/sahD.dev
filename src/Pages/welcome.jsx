import { useNavigate } from "react-router-dom"; // Import useNavigate
import drivingVideo from "../assets/driving.mp4"; // Adjust path if needed

export default function Welcome() {
  const navigate = useNavigate(); // Initialize navigation

  const handleEnterMatrix = () => {
    navigate("/home"); // Redirects to Home page
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={drivingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Better Visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Hello, <span className="text-blue-400">sahD!</span>
        </h1>
        <button 
          onClick={handleEnterMatrix} // Click event to navigate
          className="mt-6 px-8 py-3 rounded-full text-lg font-semibold bg-transparent border border-white/30 shadow-md relative overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-blue-400/40 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%] hover:shadow-lg hover:scale-105 hover:border-blue-400/50 active:scale-95 after:absolute after:inset-0 after:bg-blue-400/10 after:rounded-full after:opacity-0 hover:after:opacity-30 text-white"
        >
          Enter the <span className="text-blue-400">Matrix</span>
        </button>
      </div>
    </div>
  );
}
