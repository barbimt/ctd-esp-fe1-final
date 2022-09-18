import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { buscarPersonajesAPI, cambiarPagina } from "../services/personaje.services";
import { IRootState } from "../store/store";
import Personaje from "../types/personaje.types";
import PaginaInfo from "../types/paginaInfo.types";

 interface BuscarPersonajesAction extends Action {
    type: "BUSCAR_PERSONAJES",
    payload: {
        name: string
    }
}

 interface BuscarPersonajesExitoAction extends Action {
    type: "BUSCAR_PERSONAJES_EXITO",
    payload: {
        personajes: Personaje[],
        page: PaginaInfo
    }
   

}

 interface BuscarPersonajesErrorAction extends Action {
    type: "BUSCAR_PERSONAJES_ERROR",
    payload: {
        error: string
    }
}

 interface LimpiarFiltroAction extends Action {
    type: "LIMPIAR_FILTRO",
    payload: {
        busqueda: string
    }
}

export type PersonajesAction = BuscarPersonajesAction | BuscarPersonajesExitoAction | BuscarPersonajesErrorAction | LimpiarFiltroAction


interface BuscarPersonajesThunkAction extends ThunkAction<void, IRootState, unknown, PersonajesAction> { }

const buscarPersonajes: ActionCreator<BuscarPersonajesAction> = (name: string) => {
    return {
        type: "BUSCAR_PERSONAJES",
        payload: {
            name: name
        }
    }
}

const buscarPersonajesExito: ActionCreator<BuscarPersonajesExitoAction> = (personajes: Personaje[], paginaInfo: PaginaInfo) => {
    return {
        type: "BUSCAR_PERSONAJES_EXITO",
        payload: {
            personajes: personajes,
            page: paginaInfo
        }
    }
}

const buscarPersonajesError: ActionCreator<BuscarPersonajesErrorAction> = (error: string) => {
    return {
        type: "BUSCAR_PERSONAJES_ERROR",
        payload: {
            error: error
        }
    }
}

export const limpiarFiltroPersonaje: ActionCreator<LimpiarFiltroAction> = (busqueda: string) => {
    return {
        type: "LIMPIAR_FILTRO",
        payload: {
            busqueda: busqueda
        }
    }
}


export const buscarPersonajesThunk = (name: string): BuscarPersonajesThunkAction => {
    return async (dispatch, getState) => {
        dispatch(buscarPersonajes(name))
        try {
            const response = await buscarPersonajesAPI(name)
            const [personajes, paginaInfo] = response;
            dispatch(buscarPersonajesExito(personajes, paginaInfo))
        } catch (error) {
            dispatch(buscarPersonajesError(error))
        }
    }
}

export const cambiarPaginaThunk = (url: string): BuscarPersonajesThunkAction => {
    return async (dispatch, getState) => {
        try {
            const [personajes, paginaInfo] = await cambiarPagina(url);
            dispatch(buscarPersonajesExito(personajes, paginaInfo))
        } catch (error) {
            dispatch(buscarPersonajesError(error))
        }
    }
}
