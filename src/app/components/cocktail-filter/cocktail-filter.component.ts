import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageModule } from 'primeng/message';
import { CocktailsActions } from '../../store/cocktails/cocktails.actions';
import {
  selectCocktailTableData,
  selectCocktailsLoading,
  selectNoResults,
  selectSelectedLetter,
  selectAlcoholicCount,
  selectNonAlcoholicCount,
  selectCocktailsError
} from '../../store/cocktails/cocktails.selectors';

/**
 * CocktailFilterComponent
 * Following Single Responsibility Principle - handles only UI concerns
 * Uses Angular 20 signals and modern patterns
 * Implements proper cleanup with DestroyRef
 */
@Component({
  selector: 'app-cocktail-filter',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    ProgressSpinnerModule,
    MessageModule
  ],
  templateUrl: './cocktail-filter.component.html',
  styleUrls: ['./cocktail-filter.component.scss']
})
export class CocktailFilterComponent implements OnInit {
  // Dependency injection using modern inject() function
  private readonly store = inject(Store);
  private readonly destroyRef = inject(DestroyRef);

  // Component state - immutable array
  readonly letters: readonly string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Selectors - reactive streams from store
  readonly cocktails$ = this.store.select(selectCocktailTableData);
  readonly loading$ = this.store.select(selectCocktailsLoading);
  readonly noResults$ = this.store.select(selectNoResults);
  readonly selectedLetter$ = this.store.select(selectSelectedLetter);
  readonly alcoholicCount$ = this.store.select(selectAlcoholicCount);
  readonly nonAlcoholicCount$ = this.store.select(selectNonAlcoholicCount);
  readonly error$ = this.store.select(selectCocktailsError);

  ngOnInit(): void {
    // Subscribe to error$ for logging
    this.error$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(error => {
        if (error) {
          console.error('Cocktails loading error:', error);
        }
      });
  }

  /**
   * Filter cocktails by first letter
   * Dispatches action to NgRx store
   * @param letter - First letter to filter by
   */
  filterByLetter(letter: string): void {
    this.store.dispatch(CocktailsActions.loadCocktailsByLetter({ letter }));
  }

  /**
   * Check if letter is currently selected
   * @param letter - Letter to check
   * @returns Observable boolean
   */
  isLetterSelected(letter: string): boolean {
    let isSelected = false;
    this.selectedLetter$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(selected => isSelected = selected === letter);
    return isSelected;
  }
}
