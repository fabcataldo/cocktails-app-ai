import { Cocktail } from '../../models/cocktail.model';

export interface CocktailsState {
  cocktails: Cocktail[];
  selectedLetter: string | null;
  loading: boolean;
  error: string | null;
}

export const initialCocktailsState: CocktailsState = {
  cocktails: [],
  selectedLetter: null,
  loading: false,
  error: null
};
