import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import {
  useDispatch,
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { FC, useEffect } from "react";
import { IRootState } from "../store/store";
import {
  buscarPersonajesThunk,
  limpiarFiltroPersonaje,
} from "../actions/personajesActions";

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns la pagina de inicio
 */

const PaginaInicio: FC = () => {
  const { personajes, status } = useSelector((state) => state.personajes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buscarPersonajesThunk(""));
  }, [dispatch]);

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button
          className="danger"
          onClick={() => {
            dispatch(limpiarFiltroPersonaje(""));
            dispatch(buscarPersonajesThunk(""));
          }}
        >
          Test Button
        </button>
      </div>
      <Filtros />
      <Paginacion />
      <GrillaPersonajes status={status} listaPersonajes={personajes} />
      <Paginacion />
    </div>
  );
};

export default PaginaInicio;
