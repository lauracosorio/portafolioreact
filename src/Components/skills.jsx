import React from "react";
import "../Styles/Main.css"

function Skills() {
  return (
    <>
      <div className="col-md-6 skills">
        <div className="card-body container">
          <h2
            className="card-title about d-flex justify-content-center text-center"
            id="aboutme"
          >
            MIS HABILIDADES
          </h2>

          <h5 className="card-text text-justify text-secondary habilidades">
            <p className="titulo">INGLÉS</p>
            <div className="progress">
              <div
                className="progress-bar progre1"
                role="progressbar"
            //    {  ... style="width: 25%;"}
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                65%
              </div>
            </div>
          </h5>
          <h5 className="card-text text-justify text-secondary habilidades">
            <p className="titulo">HTML/CSS</p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                //   style="width: 25%;"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                60%
              </div>
            </div>
          </h5>
          <h5 className="card-text text-justify text-secondary habilidades">
            <p className="titulo">BOOTSTRAP</p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                //   style="width: 25%;"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                60%
              </div>
            </div>
          </h5>
          <h5 className="card-text text-justify text-secondary habilidades">
            <p className="titulo">JAVASCRIPT</p>
            <div className="progress">
              <div
                className="progress-bar progre2"
                role="progressbar"
                //   style="width: 25%;"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
          </h5>
          <h5 className="card-text text-justify text-secondary habilidades">
            <p className="titulo">REACT.JS</p>
            <div className="progress">
              <div
                className="progress-bar progre2"
                role="progressbar"
                //   style="width: 25%;"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                50%
              </div>
            </div>
          </h5>
        </div>
      </div>
    </>
  );
}

export default Skills;