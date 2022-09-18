import { FC } from "react";
import {
  useDispatch,
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { IRootState } from "../store/store";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns la pagina de favoritos
 */
const PaginaFavoritos: FC = () => {
  const historial = useSelector((state) => state.favoritos.historial);
    const favoritesArray = Array.from(historial.values())
  
  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger">Test Button</button>
      </div>
      <GrillaPersonajes listaPersonajes={favoritesArray}/>
    </div>
  );
};

export default PaginaFavoritos;
