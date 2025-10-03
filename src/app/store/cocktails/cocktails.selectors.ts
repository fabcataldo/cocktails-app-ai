import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CocktailsState } from './cocktails.state';
import { CocktailTableData } from '../../models/cocktail.model';

export const selectCocktailsState = createFeatureSelector<CocktailsState>('cocktails');

export const selectAllCocktails = createSelector(
  selectCocktailsState,
  (state) => state.cocktails
);

export const selectCocktailsLoading = createSelector(
  selectCocktailsState,
  (state) => state.loading
);

export const selectCocktailsError = createSelector(
  selectCocktailsState,
  (state) => state.error
);

export const selectSelectedLetter = createSelector(
  selectCocktailsState,
  (state) => state.selectedLetter
);

export const selectCocktailTableData = createSelector(
  selectAllCocktails,
  (cocktails): CocktailTableData[] => {
    return cocktails.map(cocktail => {
      const ingredients: { name: string; measure: string }[] = [];

      for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}` as keyof typeof cocktail];
        const measure = cocktail[`strMeasure${i}` as keyof typeof cocktail];

        if (ingredient && typeof ingredient === 'string' && ingredient.trim()) {
          ingredients.push({
            name: ingredient,
            measure: (measure && typeof measure === 'string') ? measure : ''
          });
        }
      }

      return {
        id: cocktail.idDrink,
        image: cocktail.strDrinkThumb,
        name: cocktail.strDrink,
        category: cocktail.strCategory,
        alcoholic: cocktail.strAlcoholic,
        ingredientsCount: ingredients.length,
        dateModified: cocktail.dateModified || '',
        ingredients: ingredients
      };
    });
  }
);

export const selectAlcoholicCount = createSelector(
  selectCocktailTableData,
  (cocktails) => cocktails.filter(c => c.alcoholic === 'Alcoholic').length
);

export const selectNonAlcoholicCount = createSelector(
  selectCocktailTableData,
  (cocktails) => cocktails.filter(c => c.alcoholic === 'Non alcoholic').length
);

export const selectHasResults = createSelector(
  selectAllCocktails,
  (cocktails) => cocktails.length > 0
);

export const selectNoResults = createSelector(
  selectCocktailsLoading,
  selectHasResults,
  selectSelectedLetter,
  (loading, hasResults, selectedLetter) => !loading && !hasResults && selectedLetter !== null
);
