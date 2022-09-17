import "./grilla-personajes.css";
import React, { FC, useEffect } from "react";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { useDispatch,
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { IRootState } from "../../store/store";
import { buscarPersonajesThunk } from "../../actions/personajesActions";

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un JSX element
 */
const GrillaPersonajes: FC = () => {

  const { personajes, status } = useSelector((state) => state.personajes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(buscarPersonajesThunk(""));
  }, [dispatch]);


  if (!personajes || personajes.length === 0) return <></>;
 if (status === "CARGANDO") {
    return <div>cargando personajes...</div>;
  }



  return (
    <div className="grilla-personajes">
      {personajes.map((personaje) => {
        return (
          <div key={personaje.id}>
            <TarjetaPersonaje personaje={personaje} />
          </div>
        );
      })}
    </div>
  );
};

export default GrillaPersonajes;
