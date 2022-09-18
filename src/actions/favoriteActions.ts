import { Action, ActionCreator } from "@reduxjs/toolkit";
import Personaje from "../types/personaje.types";

export interface FavoriteAction extends Action {
    type: "ADD_FAVORITE_ACTION" | "DELETE_FAVORITE_ACTION"
    payload: {
       personaje: Personaje;
    }
}

export const addFavorito: ActionCreator<FavoriteAction> = (personaje: Personaje)=> ({
    type: "ADD_FAVORITE_ACTION",
    payload: {
        personaje: personaje
     }
})

export const deleteFavorito: ActionCreator<FavoriteAction> = (personaje: Personaje)=> ({
    type: "DELETE_FAVORITE_ACTION",
    payload: {
        personaje: personaje
     }
})

export type FavoritesAction = FavoriteAction;


