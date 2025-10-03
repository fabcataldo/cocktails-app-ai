import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { CocktailsActions } from './cocktails.actions';
import { CocktailService } from '../../services/cocktail.service';

@Injectable()
export class CocktailsEffects {
  private actions$ = inject(Actions);
  private cocktailService = inject(CocktailService);

  loadCocktails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CocktailsActions.loadCocktailsByLetter),
      switchMap(({ letter }) =>
        this.cocktailService.getCocktailsByFirstLetter(letter).pipe(
          map((cocktails) =>
            CocktailsActions.loadCocktailsSuccess({ cocktails })
          ),
          catchError((error) =>
            of(CocktailsActions.loadCocktailsFailure({
              error: error.message || 'Error loading cocktails'
            }))
          )
        )
      )
    )
  );
}
