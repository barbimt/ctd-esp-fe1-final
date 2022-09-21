import "./grilla-personajes.css";
import { FC } from "react";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import Personaje from "../../types/personaje.types";
/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * @param {Object[]} listaPersonajes props
 * @param {string} status prop
 * 
 *
 * @returns {React.ReactElement} JSX element
 */
const GrillaPersonajes: FC<{ listaPersonajes: Personaje[], status?: String }> = ({ listaPersonajes, status } ) => {

  if (!listaPersonajes || listaPersonajes.length === 0) return <></>;
  if (status === "CARGANDO") {
    return <div>cargando personajes...</div>;
  }

  return (
    <div className="grilla-personajes">
      {listaPersonajes.map((personaje) => {
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
