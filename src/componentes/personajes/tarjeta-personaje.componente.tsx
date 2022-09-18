import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import Personaje from "../../types/personaje.types";
import { FC } from "react";
import {
  useDispatch,
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { IRootState } from "../../store/store";
import { addFavorito, deleteFavorito } from "../../actions/favoriteActions";

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */
const TarjetaPersonaje: FC<{ personaje: Personaje }> = ({ personaje }) => {
  const historial = useSelector((state) => state.favoritos.historial);

  const dispatch = useDispatch();

  const seleccionarPersonaje = (personaje: Personaje) => {
    console.log("seleccionar personaje", personaje.id);
    console.log(historial.has(personaje.id), "historial", personaje.id);
    if (historial.has(personaje.id)) {
      dispatch(deleteFavorito(personaje));
    } else {
      dispatch(addFavorito(personaje));
    }
  };

  return (
    <div className="tarjeta-personaje">
      <img src={personaje.image} alt={personaje.name} />
      <div className="tarjeta-personaje-body">
        <span>{personaje.name}</span>
        <BotonFavorito
          esFavorito={historial.has(personaje.id)}
          onClick={() => {
            seleccionarPersonaje(personaje);
          }}
        />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
