import React from "react";
import { Link } from "react-router-dom";
import greenVideo from"../assets/green.mp4"


const Home = () => {
  return (
  <div className="relative w-full h-screen flex flex-col items-center justify-center">
    <video 
    autoPlay
    loop
    muted
     className="absolute top-0 left-0 w-full h-full object-cover">
      <source src={greenVideo} type="video/mp4" />
      Your browser does not support the video tag.
     </video>

  
    </div>
  
  ) 
}

export default Home