import "./paginacion.css";
import { FC, useState } from "react";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { IRootState } from "../../store/store";
import { cambiarPaginaThunk } from "../../actions/personajesActions";

/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 *
 * @returns {React.ReactElement} JSX element
 */
const Paginacion: FC = () => {
  const dispatch = useDispatch();
  const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
  const { count, pages, next, prev } = useSelector((state) => state.personajes.page);

  const paginaAnterior = ():void => {
    dispatch(cambiarPaginaThunk(prev));
  };

  const paginaSiguiente = ():void  => {
    dispatch(cambiarPaginaThunk(next));
  };

  return (
    <div className="paginacion">
      <button disabled={prev === null ? true : false} className={"primary"} onClick={paginaAnterior}>
        Anterior
      </button>

      <button disabled={next === null ? true : false} className={"primary"} onClick={paginaSiguiente}>
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
