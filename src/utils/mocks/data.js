import React from "react";
import elefante from "../../images/elefante.jpg";
import barbie from "../../images/Barbie.png";
import banner from "../../images/banner.png";
import css from "../../images/css.png";

export const data = {
  Header: [
    {
      titulo: "Inicio",
      link: "#welcome-section"
    },
    {
      titulo: "Sobre Mi",
      link: "#aboutme"
    },
    {
      titulo: "Mis proyectos",
      link: "#proyectos"
    },
    {
      titulo: "Contáctame",
      link: "#contactame"
    }
  ],

  Proyectos: [
    {
      image: elefante,
      titulo: "Página Tributo",
      expli: "Sitio web dedicada a los elefantes",
      ref: "https://lauracosorio.github.io/tribute-page/",
      button: "Ver proyecto"
    },
    {
      image: barbie,
      titulo: "Página de Producto",
      expli: "Sitio web dedicado a la venta barbies",
      ref: "https://lauracosorio.github.io/producto/",
      button: "Ver proyecto"
    },
    {
      image: css,
      titulo: "Página de Documentación Técnica",
      expli: "Encontraras información básica sobre CSS",
      ref: "https://lauracosorio.github.io/pag_documentacion/",
      button: "Ver proyecto"
    },
    {
      image: banner,
      titulo: "Trabajo grupal LCD",
      expli:
        "Sitio web donde encontraras el perfil profesional de las integrantes del grupo.",
      ref: "https://lauracosorio.github.io/lcd/inicio.html",
      button: "Ver proyecto"
    }
  ],

  Skill: [
    {
      titulo: " HTML/CSS",
      porcentaje: 60
    },
    { titulo: " BOOTSTRAP",
      porcentaje: 60 
    }
  ],

  Skills: [
    {
      titulo: " JAVASCRIPT",
      porcentaje: 50
    },
    { titulo: " REACT.JS",
      porcentaje: 50 
    }
  ]
};
