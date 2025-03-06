import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-blue-400 text-center py-4 mt-1">
      <div className="container mx-auto px-6">
        <p className="text-sm">
          © {new Date().getFullYear()} sahD.dev. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
