import './filtros.css';
import React, {FC} from "react";
import {useDispatch} from "react-redux";
import { buscarPersonajesThunk  } from '../../actions/personajesActions';
import {
    TypedUseSelectorHook,
    useSelector as useReduxSelector,
  } from "react-redux";
  import { IRootState } from "../../store/store";





const Filtros:FC = () => {
const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
    const dispatch = useDispatch();
    const busqueda = useSelector((state) => state.personajes.busqueda);

    return <div className="filtros">
        <label>Filtrar por nombre:</label>
        <input value={busqueda} type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={(e)=> {
            dispatch(buscarPersonajesThunk(e.target.value))
        }} autoFocus={true} />
    </div>
}

export default Filtros;