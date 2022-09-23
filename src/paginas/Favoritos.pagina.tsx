import { FC } from "react";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
  useDispatch,
} from "react-redux";
import { IRootState } from "../store/store";
import { deleteAllFavorite } from "../actions/favoriteActions";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns {React.ReactElement} la pagina de favoritos
 */
const PaginaFavoritos: FC = () => {
  const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
    const dispatch = useDispatch()

  const historial = useSelector((state) => state.favoritos.historial);
    const favoritesArray = Array.from(historial.values())
  
  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger" onClick={()=> dispatch(deleteAllFavorite())}> Eliminar todos</button>
      </div>
      {
        !favoritesArray.length ?  <p>No seleccionaste ningun personaje como favorito</p>  :  <GrillaPersonajes listaPersonajes={favoritesArray}/>
      }
  
    </div>
  );
};

export default PaginaFavoritos;
