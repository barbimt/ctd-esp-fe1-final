import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { FC, useEffect, useState } from "react";
import {
  useDispatch,
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { IRootState } from "../store/store";
import Episodio from "../types/episodio.types";
import { useLocation } from "react-router-dom";
import Personaje from "../types/personaje.types";
import { traerEpisodiosThunk } from "../actions/episodiosAction";
import { addFavorito, deleteFavorito } from "../actions/favoriteActions";

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 *
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 *
 *
 *
 * Uso:
 * ``` <PaginaDetalle /> ```
 *
 * @returns la pagina de detalle
 */
const PaginaDetalle: FC = () => {
  const { episodios, status } = useSelector((state) => state.episodios);
  const historial = useSelector((state) => state.favoritos.historial);

  const dispatch = useDispatch();

  const seleccionarPersonaje = (personaje: Personaje) => {
    if (historial.has(personaje.id)) {
      dispatch(deleteFavorito(personaje));
    } else {
      dispatch(addFavorito(personaje));
    }
  };

  const location = useLocation();
  const state: any = location.state;
  const personaje: Personaje = { ...state.personaje };

  const [episodioArrayID, setEpisodioArrayID] = useState<
    (string | undefined)[]
  >([]);

  useEffect(() => {
    const array: (string | undefined)[] = personaje.episode.map((episode) => {
      return episode.split("/").at(-1);
    });
    setEpisodioArrayID(array);
  }, [personaje.episode]);

  useEffect(() => {
    dispatch(traerEpisodiosThunk(episodioArrayID));
    window.scrollTo(0, 0);
  }, [episodioArrayID]);

  return (
    <div className="container">
        
      <h3>{personaje.name}</h3>
      <div className={"detalle"}>
        <div className={"detalle-header"}>
          <img src={personaje.image} alt={personaje.name} />
          <div className={"detalle-header-texto"}>
            <p>{personaje.name}</p>
            <p>Planeta: {personaje.origin.name}</p>
            <p>Genero: {personaje.gender}</p>
          </div>
          <BotonFavorito
            esFavorito={historial.has(personaje.id)}
            onClick={() => {
              seleccionarPersonaje(personaje);
            }}
          />
        </div>
      </div>
      <h4>Lista de episodios donde apareció el personaje</h4>
      <div className={"episodios-grilla"}>
        {status === "CARGANDO" ? (
          <div>Cargando episodios...</div>
        ) : status === "COMPLETADO_CON_ERROR" ? (
          <div>No se pudo cargar los episodios...</div>
        ) : !episodios ? (
          <></>
        ) : Array.isArray(episodios) ? (
          episodios.map((episodio: Episodio) => {
            return (
              <div key={`episode_${episodio.id}_${personaje.name}`}>
                <TarjetaEpisodio episodio={episodio} />
              </div>
            );
          })
        ) : (
          <TarjetaEpisodio episodio={episodios} />
        )}
      </div>
    </div>
  );
};

export default PaginaDetalle;
