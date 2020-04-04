import React from "react";
import "../Styles/Header.css";

function Nav(props) {
  const { dataNav } = props;

  return (
    <>
      <div className="main_menu">
        <nav className="navbar navbar-expand-md ">
          <div className="container header-logo">
            <p id="header">Laura Osorio</p>

            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav menu_nav justify-content-end">
                {dataNav.map((item, index) => {
                  return (
                    <li className="nav-item active" key={`nav-item-${index}`}>
                      <a className="nav-link text-white" href={item.link}>
                        {item.titulo}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
