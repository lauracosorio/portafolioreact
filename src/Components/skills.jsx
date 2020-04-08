import React from "react";
import "../Styles/Main.css";

function Skills(props) {
  const { Skills1, Skills2 } = props;
  console.log(Skills1, Skills2);
  return (
    <>
      <div className="col-md-6 skills">
        <div className="card-body container">
          <h3
            className="card-title about d-flex justify-content-center text-center"
            id="aboutme"
          >
            MIS HABILIDADES
          </h3>

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
            {Skills1.map((item, index) => {
              return (
                <>
                  <p className="titulo" key={`skills-item-${index}`}>
                    {item.titulo}
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      //   style="width: 25%;"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {item.porcentaje} %
                    </div>
                  </div>
                </>
              );
            })}
          </h5>

          <h5 className="card-text text-justify text-secondary habilidades">
            {Skills2.map((item, index) => {
              return (
                <>
                  <p className="titulo" key={`skills-2-item-${index}`}>
                    {item.titulo}
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar progre2"
                      role="progressbar"
                      //   style="width: 25%;"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {item.porcentaje} %
                    </div>
                  </div>
                </>
              );
            })}
          </h5>
        </div>
      </div>
    </>
  );
}

export default Skills;
