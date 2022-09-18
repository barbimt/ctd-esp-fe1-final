import './boton-favorito.css';
import { FC, MouseEventHandler } from "react";

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito : FC<{esFavorito: Boolean, onClick: MouseEventHandler<HTMLImageElement> }> = ({esFavorito,  onClick}) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"
    console.log(esFavorito, "es favorito")

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={onClick} />
    </div>
}

export default BotonFavorito;