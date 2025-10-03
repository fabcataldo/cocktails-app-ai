import { createReducer, on } from '@ngrx/store';
import { CocktailsActions } from './cocktails.actions';
import { CocktailsState, initialCocktailsState } from './cocktails.state';

export const cocktailsReducer = createReducer(
  initialCocktailsState,

  on(CocktailsActions.loadCocktailsByLetter, (state, { letter }) => ({
    ...state,
    selectedLetter: letter,
    loading: true,
    error: null
  })),

  on(CocktailsActions.loadCocktailsSuccess, (state, { cocktails }) => ({
    ...state,
    cocktails,
    loading: false,
    error: null
  })),

  on(CocktailsActions.loadCocktailsFailure, (state, { error }) => ({
    ...state,
    cocktails: [],
    loading: false,
    error
  })),

  on(CocktailsActions.clearCocktails, (state) => ({
    ...state,
    cocktails: [],
    selectedLetter: null,
    error: null
  }))
);
