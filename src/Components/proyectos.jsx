import React from "react";
import "../Styles/Main.css";

function Proyectos(props) {
  const { Proyectos } = props;
  return (
    <>
      <section className="features_area" id="proyectos">
        <div className=" container">
          <div className="row justify-content-center ">
            <div className="col-lg-8 text-center ">
              <div className="main_title text-center">
                <h3>MIS PROYECTOS</h3>
              </div>
            </div>
          </div>
          <div className="row feature_inner ">
            {Proyectos.map((item, index) => {
              return (
                <div className="col-lg-3 col-md-6">
                  <div className="feature_item" key={`proyects-item-${index}`}>
                    <img src={item.image}/>
                    <h4 className="titule">{item.titulo}</h4>
                    <p className="text-center">{item.expli}</p>
                    <button type="button" className="btn btn-info">
                      <a
                        className="link1 text-white align-items-center"
                        target="_blank"
                        rel="stylesheet"
                        href={item.ref}
                      >
                        {item.button}
                      </a>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Proyectos;
