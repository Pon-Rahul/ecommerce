import React from "react";
import "./LandingPage.css";
import background from "../Assets/wallpaperflare.com_wallpaper.jpg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

  const navigate = useNavigate();
  
  return (
    <div>
      <img src={background} alt="background" className="background_image" />
      <div className="overlay"></div>
      <div className="content">
        <div>We use the best quality Drones,</div>
        <div>We believe that with smart design,</div>
        <div>Check out the latest drone camera price list.</div>
        <div className="text_one"> Get zero down payment offers ...!</div>
        <button
          type="button"
          className="button-64"
          onClick={() => navigate("/search")}
        >
          Shop now
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
