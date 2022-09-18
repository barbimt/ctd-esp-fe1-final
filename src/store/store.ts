import { combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import personajesReducer from "../reducers/personajesReducer";
import { createStore, compose } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
import thunk from "redux-thunk";
import favoriteReducer from "../reducers/favoritoReducer";

const rootReducer = combineReducers({
    personajes: personajesReducer,
    favoritos: favoriteReducer
});

export type IRootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)