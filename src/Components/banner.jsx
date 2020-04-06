import React from "react";
import "../Styles/Header.css";
import whatsapp from "../whatsapp.png" 

function Banner() {
  return (
    <>
    <div className="container-banner" id="welcome-section">
      <label className="texto-banner" align="bottom">
        <h3 className="col-md-collapse">
          Ingeniera Biomédica y <br />
          Desarrolladora Front-End Junior
        </h3>
      </label>
    </div>
    
    <div className="redes-flotantes scroll">
    <div className="separator">
      <a href="http://wa.me/573005716296" target="_blank"><img src={whatsapp}/></a>
    </div>
  </div>
  </>
  );
}

export default Banner;
