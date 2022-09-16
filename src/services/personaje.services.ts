import Personaje from "../types/personaje.types";
import PaginaInfo from "../types/paginaInfo.types";

export const buscarPersonajesAPI = async (name?: string): Promise<[Personaje[], PaginaInfo] | [any, any]> => {
    let params = "?"

    if (name) {
        params += `name=${name}`
    }

    return fetch(`https://rickandmortyapi.com/api/character/${params}`)
        .then(data => data.json())
        .then(data => [data.results, data.info])
}

export const cambiarPagina = async (url: string): Promise<[Personaje[], PaginaInfo]> => {
    console.log("cambiar pagina", url)
    return fetch(url)
        .then((data) => data.json())
        .then((data) => [data.results, data.info])
}