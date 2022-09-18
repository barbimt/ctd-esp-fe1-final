import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { fetchEpisodios } from "../services/personaje.services"
import { IRootState } from "../store/store";
import Episodio from "../types/episodio.types";

 interface TraerEpisodiosAction extends Action {
    type: "TRAER_EPISODIOS",
 
}

interface TraerEpisodiosExitoAction extends Action {
    type: "TRAER_EPISODIOS_EXITO";
    payload: {episodios: Episodio | Episodio[];}
    
  }

  interface TraerEpisodiosErrorAction extends Action {
    type: "TRAER_EPISODIOS_ERROR";
    payload: {error: string};
  }

  const traerEpisodios: ActionCreator<TraerEpisodiosAction> = () => {
    return {
        type: "TRAER_EPISODIOS",

    }
  }

  const traerEpisodiosExito: ActionCreator<TraerEpisodiosExitoAction> = (episodios: Episodio | Episodio[]) => {
    return {
        type: "TRAER_EPISODIOS_EXITO",
        payload: {
            episodios: episodios
        }

    }
  }

  const traerEpisodiosError: ActionCreator<TraerEpisodiosErrorAction> = (error: string) => {
    return {
        type: "TRAER_EPISODIOS_ERROR",
        payload: {
            error: error
        }

    }
  }

  export type EpisodiosAction = TraerEpisodiosAction | TraerEpisodiosExitoAction | TraerEpisodiosErrorAction 

  interface FetchEpisodiosThunckAction extends ThunkAction<void, IRootState, unknown, EpisodiosAction> { }


export const traerEpisodiosThunk = (
    episodioArrayID: (string | undefined)[]
): FetchEpisodiosThunckAction => {
  return async (dispatch, getState) => {
    try {
      const response = await fetchEpisodios(episodioArrayID);
      if (response !== undefined) {
        dispatch(traerEpisodiosExito(response));
      }
    } catch (e) {
      dispatch(traerEpisodiosError(e));
    }
  };
};