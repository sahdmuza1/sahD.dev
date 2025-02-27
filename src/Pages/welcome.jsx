import drivingVideo from "../assets/driving.mp4"; // Adjust path if needed

export default function Welcome() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
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

      {/* Centered Text */}
      <h1 className="relative text-5xl md:text-6xl font-bold text-white z-10">
        Hello, <span className="text-blue-400">sahD!</span>
      </h1>
    </div>
  );
}
