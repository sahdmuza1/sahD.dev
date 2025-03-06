import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to <span className="text-blue-400">sahD's</span> Space
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
          A place where innovation meets simplicity. Explore and create with a futuristic touch.
        </p>

        {/* Call to Action Button */}
        <button className="mt-6 px-8 py-3 rounded-full text-lg font-semibold bg-blue-500 hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
