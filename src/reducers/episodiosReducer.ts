import { Reducer } from "@reduxjs/toolkit";
import { EpisodiosAction } from "../actions/episodiosAction";
import Episodio from "../types/episodio.types";

export interface EpisodiosState {
    status: "IDLE" | "CARGANDO" | "COMPLETADO" | "COMPLETADO_CON_ERROR";
    episodios: Episodio | Episodio[];
    error: string | null;
}

const initialState: EpisodiosState = {
    status: "IDLE",
    episodios: [],
    error: null,
};

const episodiosReducer: Reducer<EpisodiosState, EpisodiosAction> = (state = initialState, action): EpisodiosState => {
    switch (action.type) {
        case "TRAER_EPISODIOS":
            return {
                ...state,
                status: "CARGANDO",
                episodios: [],
                error: null,
            }
        case "TRAER_EPISODIOS_EXITO":
            return {
                ...state,
                status: "COMPLETADO",
                episodios: action.payload.episodios,
                error: null,
            }
        case "TRAER_EPISODIOS_ERROR":
            return {
                ...state,
                status: "COMPLETADO_CON_ERROR",
                error: action.payload.error,
            }
        default:
           return {...state}
    }
}

export default episodiosReducer;