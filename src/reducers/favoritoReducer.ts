import Personaje from "../types/personaje.types";
import { FavoritesAction } from "../actions/favoriteActions";

export type FavoriteState = {
    historial: Map<number, Personaje>;
}

const estadoInicial: FavoriteState = {
    historial: new Map(),
}



/**
 * Favorito reducer
 *
 * @param {State} estadoInicial
 * @param {DataStore.Reducer<FavoriteState, FavoritesAction>} action
 *
 * @returns {State}
 */
const favoriteReducer = (state: FavoriteState = estadoInicial, action: FavoritesAction) => {
    switch (action.type) {

        case "ADD_FAVORITE_ACTION":
            const map = new Map()
            state.historial.forEach((e) => {
                map.set(e.id,e)
            })
            map.set(action.payload.personaje.id, action.payload.personaje)
            return {
                ...state,
                historial: map
            }
        case "DELETE_FAVORITE_ACTION":
            const mapDelete = new Map()
            state.historial.forEach((e) => {
                mapDelete.set(e.id,e)
            })
            mapDelete.delete(action.payload.personaje.id)
            return {
                ...state,
                historial: mapDelete
            }
        case "DELETE_ALL_FAVORITE_ACTION":
            return {
                ...estadoInicial
            }

        default:
            return {...state}
    }
}
export default favoriteReducer;