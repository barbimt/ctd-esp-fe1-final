import './filtros.css';
import React, {FC} from "react";
import {useDispatch} from "react-redux";
import { buscarPersonajesThunk } from '../../actions/personajesActions';

const Filtros:FC = () => {
    const dispatch = useDispatch();

    return <div className="filtros">
        <label>Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={(e)=> dispatch(buscarPersonajesThunk(e.target.value))} autoFocus={true} />
    </div>
}

export default Filtros;