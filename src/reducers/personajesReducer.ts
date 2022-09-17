import { Reducer } from "@reduxjs/toolkit";
import { PersonajesAction } from "../actions/personajesActions";
import PaginaInfo from "../types/paginaInfo.types";
import Personaje from "../types/personaje.types";

export interface PersonajesState {
    page: PaginaInfo;
    busqueda: string;
    personajes: Personaje[];
    status: "CARGANDO" | "COMPLETADO" | "COMPLETADO_CON_ERROR"
    error: string | null;
}

const initialState: PersonajesState = {
    page: { count: 0, pages: 0, next: "", prev: "" },
    busqueda: '',
    personajes: [],
    status: "COMPLETADO",
    error: null
};

const personajesReducer: Reducer<PersonajesState, PersonajesAction> =
    (state = initialState, action): PersonajesState => {
        switch (action.type) {
            case "BUSCAR_PERSONAJES":
                return {
                    ...state,
                    busqueda: action.payload.name,
                    status: "CARGANDO",
                    error: null,
                }
            case "BUSCAR_PERSONAJES_EXITO":
                return {
                    ...state,
                    status: "COMPLETADO",
                    personajes: [...action.payload.personajes],
                    page: action.payload.page
                }
            case "BUSCAR_PERSONAJES_ERROR":
                return {
                    ...state,
                    status: "COMPLETADO_CON_ERROR",
                    personajes: [], //opcional
                    error: action.payload.error
                }
            case "LIMPIAR_FILTRO":
                    return {
                        ...state,
                       busqueda: "",                  
                    }
            default:
                return state;
        }
    }
export default personajesReducer;