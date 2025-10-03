import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Cocktail } from '../../models/cocktail.model';

export const CocktailsActions = createActionGroup({
  source: 'Cocktails',
  events: {
    'Load Cocktails By Letter': props<{ letter: string }>(),
    'Load Cocktails Success': props<{ cocktails: Cocktail[] }>(),
    'Load Cocktails Failure': props<{ error: string }>(),
    'Clear Cocktails': emptyProps(),
  }
});
