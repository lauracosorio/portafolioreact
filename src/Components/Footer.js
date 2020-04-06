import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer_area ">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-12 ">
              <div className="footer_top flex-column ">
                <div className="footer_logo text-center" id="contactame">
                  <h4>Contáctame</h4>
                </div>

                <div className="footer_social">
                  <a
                    href="https://www.linkedin.com/in/laura-cristina-osorio-gómez"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin fa-2x"></i>
                  </a>
                  &nbsp; &nbsp;
                  <a href="https://github.com/lauracosorio" target="_blank">
                    <i class="fab fa-github fa-2x"></i>
                  </a>
                  &nbsp; &nbsp;
                  <a
                    title="lauracosoriogomez@gmail.com"
                    target="_blank"
                  >
                    <i class="fas fa-envelope fa-2x "></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer_bottom justify-content-center ">
            <p className="col-lg-8 col-sm-12 footer-text text-center">
              Copyright © Laura Cristina Osorio Gómez 2020
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
