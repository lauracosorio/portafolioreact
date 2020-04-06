import React from 'react';
import SobreMi from "./sobreMi.jsx";
import Proyectos from "./proyectos.jsx";
import {data} from "../utils/mocks/data";
import Skills from './skills.jsx';

function Main (){

    return (
        <>
        <SobreMi 
        />
    
        <Proyectos 
        Proyectos={data.Proyectos}/>
        </>
    )
}

export default Main;