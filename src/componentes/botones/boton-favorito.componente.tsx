import './boton-favorito.css';
import { FC, MouseEventHandler } from "react";

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * @param {onClick: event} props
 * @param {esFavorito: boolean} props  esFavorito -> recibe si el elemento es favorito ono
 * @returns {React.ReactElement} JSX element
 */
const BotonFavorito : FC<{esFavorito: Boolean, onClick: MouseEventHandler<HTMLImageElement> }> = ({esFavorito,  onClick}) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={onClick} />
    </div>
}

export default BotonFavorito;