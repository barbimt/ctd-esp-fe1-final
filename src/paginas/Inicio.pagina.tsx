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

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns {React.ReactElement} JSX element
 */

const PaginaInicio: FC = () => {
  const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
  const { personajes, status } = useSelector((state) => state.personajes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buscarPersonajesThunk(""));
  }, [dispatch]);



  const limpiarFiltroOnClick = () => {
    dispatch(limpiarFiltroPersonaje(""));
    dispatch(buscarPersonajesThunk(""));
  }
  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button
          className="danger"
          onClick={limpiarFiltroOnClick}
        >
          Limpiar filtros
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
