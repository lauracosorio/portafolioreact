import React from "react";
import "../Styles/Main.css";
import Skills from "./skills.jsx";

function SobreMi() {
  return (
    <>
      <div className="row no-gutters">
        <div className="col-md-6">
          <div className="card-body container">
            <h3
              className="card-title about d-flex justify-content-center text-center"
              id="aboutme"
            >
              UN POCO SOBRE MI
            </h3>
            <br />

            <h5 className="card-text text-justify description container">
              Soy Laura Cristina Osorio Gómez, tengo 23 años y soy Ingeniera
              biomédica y Desarrolladora Web Front-End con enfasis en REact.js .{" "}
              <br />
              Apasionada por la tecnología,los retos y el desarrollo web. Me
              identifico por ser una persona responsable, comprometida y
              honesta. Hábil y con buena actitud para el trabajo en equipo, para
              entablar relaciones personales y afrontar nuevos retos...
            </h5>
          </div>
        </div>
        <Skills />
      </div>
    </>
  );
}

export default SobreMi;
