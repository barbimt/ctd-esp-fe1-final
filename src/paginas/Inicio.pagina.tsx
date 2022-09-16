import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import {useDispatch} from "react-redux";
import React, {FC} from "react";
import { buscarPersonajesThunk, limpiarFiltroPersonaje } from "../actions/personajesActions";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */



const PaginaInicio: FC = () => {
    const dispatch = useDispatch();

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={()=> {
                         dispatch(limpiarFiltroPersonaje(""))
                         dispatch(buscarPersonajesThunk(""))
            }}>Test Button</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes />
        <Paginacion />
    </div>
}

export default PaginaInicio