import './tarjeta-episodio.css';
import { FC } from "react";
import Episodio from '../../types/episodio.types';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 *  @param {Episodio} episodio
 * @returns {React.ReactElement} JSX element
 */
const TarjetaEpisodio: FC<{episodio: Episodio}> = ({episodio}) => {

    return <div className="tarjeta-episodio">
            <h4>{episodio.name}</h4>
            <div>
                <span>{episodio.episode}</span>
                <span>Lanzado el: {episodio.air_date}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;