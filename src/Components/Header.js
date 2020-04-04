import React from "react";
import Banner from "./banner.jsx";
import Nav from "./Nav.jsx";
import encabezado from "../encabezado2.png";
import {data} from "../utils/mocks/data";

function Header() {
  return (
    <>
      <header className="header_area navbar_fixed">
        <div className="card bg-dark text-white">
          <img src={encabezado} className="card-img" alt="..." />

          <div className="card-img-overlay">
            <Nav 
            dataNav= {data.Header}/>
            <Banner />
            
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
